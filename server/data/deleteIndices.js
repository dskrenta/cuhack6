'use strict';

const client = require('../src/utils/elasticsearchClient');

async function deleteIndices() {
  try {
    await client.indices.delete({
      index: 'cuhack6-records'
    });
  }
  catch (error) {
    console.error(error);
  }
}

deleteIndices();
