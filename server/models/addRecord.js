const {
  INDICES: {
    recordsIndex
  }
} = require('../utils/constants');

async function addRecord({ esClient, userId, text, tags, urls }) {
  try {
    const res = await esClient.index({
      index: recordsIndex,
      type: 'record',
      body: {
        userId,
        text,
        tags,
        urls
      }
    });

    if (res.result === 'created') {
      return res._source;
    }

    return false;
  }
  catch (error) {
    console.error('addRecord error', error);
  }
}

module.exports = addRecord;
