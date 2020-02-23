'use strict';

const client = require('../utils/elasticsearchClient');
const {
  INDICES: {
    recordsIndex
  }
} = require('../utils/constants');

async function createIndicies() {
  try {
    await client.indices.create({
      index: recordsIndex,
      body: {
        mappings: {
          '_doc': {
            properties: {
              userId: {type: 'keyword'},
              text: {type: 'text'},
              tags: {type: 'keyword'},
              urls: {
                type: 'nested',
                properties: {
                  url: {type: 'keyword'},
                  title: {type: 'keyword'},
                  snippet: {type: 'text'},
                  image: {type: 'text'},
                  icon: {type: 'text'},
                  crawledAt: {type: 'date'}
                }
              }
            }
          }
        }
      }
    });
  }
  catch (error) {
    console.error('create indices error', error);
  }
}

createIndicies();
