'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: `${__dirname}/../.env`});
}

const express = require('express');
const cors = require('cors');

const esClient = require('./utils/elasticsearchClient');
const queryParser = require('./utils/queryParser');
const modules = require('./modules');
const searchRecords = require('./models/searchRecords');
const addRecord = require('./models/addRecord');

const PORT = process.env.PORT || 3000;

// Express configuration
const app = express();
app.use(express.static(`${__dirname}/../web`));
app.use(cors());

app.get('/api', async (req, res) => {
  try {
    const query = decodeURIComponent(req.query.q);
    const parsedQuery = queryParser(query);

    let results = [];

    if (parsedQuery.type === 'add') {
      console.log('add command', parsedQuery);
    }
    else {
      console.log('search', parsedQuery);

      // Check package triggers and execute packages
      for (const mod of modules) {
        if (mod.mod.trigger(query)) {
          const modResult = await mod.mod[mod.key](query);
          if (modResult) results.push(modResult);
        }
      }

      // Search records
      const records = await searchRecords({
        esClient,
        query,
        offset: 0,
        limit: 10
      });
      if (records) {
        results = [...records, ...results];
      }
    }

    console.log(results);

    const sampleData = [
      {
        type: 'text',
        text: 'Some cool text'
      },
      {
        type: 'cheat-sheet',
        url: 'https://cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/'
      },
      {
        type: 'rosetta-code',
        title: 'Apply a callback to an array - JavaScript',
        url: 'https://rosettacode.org/wiki/Apply_a_callback_to_an_array#JavaScript'
      }
    ]

    res.json(sampleData);
  }
  catch (error) {
    console.error('/api error', error);
  }
});

app.post('/auth', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    res.send('foo');
  }
  catch (error) {
    console.error('/auth error', error);
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
