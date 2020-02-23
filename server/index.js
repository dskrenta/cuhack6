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
const urlPreview = require('./utils/urlPreview');

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

    // Add record to index
    if (parsedQuery.type === 'add') {
      const record = {
        userId: '123',
        text: parsedQuery.addContent,
        tags: parsedQuery.tags,
        urls: []
      };

      const urls = parsedQuery.addContent.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
      if (urls) {
        const urlsWithHttp = urls.map(url => `http://${url}`);
        const urlPreviewsPromises = urlsWithHttp.map(url => urlPreview(url));
        const urlPreviews = await Promise.all(urlPreviewsPromises);
        record.urls = urlPreviews;
      }

      await addRecord({ esClient, ...record });
    }

    // Search
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
