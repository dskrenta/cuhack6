'use strict';

const flattenResponse = require('../utils/flattenResponse');
const {
  INDICES: {
    recordsIndex
  }
} = require('../utils/constants');

async function searchRecords({
  esClient,
  query,
  offset,
  limit
}) {
  try {
    const searchRes = await esClient.search({
      index: recordsIndex,
      from: offset,
      size: limit,
      body: {
        query: {
          multi_match: {
            query,
            fields: [
              'text'
            ]
          }
        }
      }
    });

    return flattenResponse({ res: searchRes, array: true, total: false });
  }
  catch (error) {
    console.error('searchRecords error', error);
  }
}

module.exports = searchRecords;
