'use strict';

const mathjs = require('mathjs');

const dp = {};

async function math(query) {
  try {
    const data = dp[query] || mathjs.evaluate(query);

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
