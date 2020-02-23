if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: `${__dirname}/../../.env`});
}

const AWS = require('aws-sdk');
const elasticsearch = require('aws-elasticsearch-client');

const {
  ES_ENDPOINT,
  ES_REGION
} = require('./constants');

const esClient = elasticsearch.create({
  host: ES_ENDPOINT,
  log: process.env.NODE_ENV !== 'production' ? 'trace' : undefined,
  region: ES_REGION,
  credentials: new AWS.Credentials(process.env.appearixElasticsearchAccessKeyId, process.env.appearixElasticsearchSecretAccessKey)
});

module.exports = esClient;
