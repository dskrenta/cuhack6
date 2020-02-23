'use strict';

const {
  INDICES: {
    recordsIndex
  }
} = require('../utils/constants');

async function addRecord({ esClient, userId, text, tags, urls = [] }) {
  try {
    const recordBody = {
      userId,
      text,
      tags,
      urls
    };

    const res = await esClient.index({
      index: recordsIndex,
      body: recordBody
    });

    if (res.result === 'created') {
      return recordBody;
    }

    return false;
  }
  catch (error) {
    console.error('addRecord error', error);
  }
}

module.exports = addRecord;
