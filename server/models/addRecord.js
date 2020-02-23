'use strict';

const {
  INDICES: {
    recordsIndex
  }
} = require('../utils/constants');
const getTimestamp = require('../utils/getTimestamp');

async function addRecord({ esClient, userId, text, tags, urls = [] }) {
  try {
    const recordBody = {
      userId,
      text,
      tags,
      urls,
      createdAt: getTimestamp()
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
