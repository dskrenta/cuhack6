const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getTimestamp = require('../utils/getTimestamp');

async function urlPreview(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const $ = cheerio.load(text);

    return {
      title: $('title').text(),
      image: $('meta[property="og:image"]').attr('content'),
      icon: $('link[rel="icon"]').attr('href'),
      snippet: $('meta[property="og:description"]').attr('content'),
      url,
      crawledAt: getTimestamp()
    };
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = urlPreview;
