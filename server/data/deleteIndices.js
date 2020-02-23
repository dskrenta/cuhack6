'use strict';

const client = require('../src/utils/elasticsearchClient');
const {
  INDICES: {
    recordsIndex
  }
} = require('../utils/constants');

async function deleteIndices() {
  try {
    await client.indices.delete({
      index: recordsIndex
    });
  }
  catch (error) {
    console.error(error);
  }
}

deleteIndices();
