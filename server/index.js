'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: `${__dirname}/../.env`});
}

const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');
const elasticsearch = require('aws-elasticsearch-client');

const { ES_ENDPOINT, ES_REGION } = require('./utils/constants');
const queryParser = require('./utils/queryParser');
const modules = require('./modules');

const PORT = process.env.PORT || 3000;

// Express configuration
const app = express();
app.use(express.static(`${__dirname}/../web`));
app.use(cors());

// Elasticsearch configuration
const esClient = elasticsearch.create({
  host: ES_ENDPOINT,
  log: process.env.NODE_ENV !== 'production' ? 'trace' : undefined,
  region: ES_REGION,
  credentials: new AWS.Credentials(process.env.elasticsearchAccessKeyId, process.env.elasticsearchSecretAccessKey)
});

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

      for (const mod of modules) {
        if (mod.mod.trigger(query)) {
          const modResult = await mod.mod[mod.key](query);
          if (modResult) results.push(modResult);
        }
      }

      // check triggers for modules
      // perform es search
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
