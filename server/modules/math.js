'use strict';

const mathjs = require('mathjs');
const isObject = require('../utils/isObject');

const dp = {};

async function math(query) {
  try {
    let data = dp[query] || mathjs.evaluate(query);

    if (isObject(data)) {
      data = data.value;
    }

    return {
      type: 'text',
      text: data ? data : null
    };
  }
  catch (error) {
    console.error('mathjs error', error);
  }
}

async function trigger(query) {
  try {
    if(!isNaN(query)) {
      return false;
    }

    const res = mathjs.evaluate(query);
    dp[query] = res;

    return true;
  }
  catch (error) {
    console.error('mathjs trigger error', error);
    return false;
  }
}

module.exports = { math, trigger };
