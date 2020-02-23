'use strict';

const esClient = require('../utils/elasticsearchClient');
const addRecord = require('../models/addRecord');
const searchRecords = require('../models/searchRecords');

async function test() {
  try {
    /*
    const addRecordRes = await addRecord({
      esClient,
      userId: '123',
      text: 'I love node.js',
      tags: ['nodejs'],
    });
    console.log('addRecordRes', addRecordRes);
    */

    const searchRes = await searchRecords({
      esClient,
      query: 'node.js',
      offset: 0,
      limit: 10
    });
    console.log('searchRes', searchRes);
  }
  catch (error) {
    console.error('test error', error);
  }
}

test();
