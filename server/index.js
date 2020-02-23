'use strict';

const express = require('express');
const cors = require('cors');

const queryParser = require('./utils/queryParser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/../web`));
app.use(cors());

app.get('/api', async (req, res) => {
  try {
    const query = req.query.q;
    const parsedQuery = queryParser(query);

    if (parsedQuery.type === 'add') {
      console.log('add command', parsedQuery);
    }
    else {
      console.log('search', parsedQuery);
    }

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
