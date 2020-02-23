'use strict';

function queryParser(query) {
  let type = 'search';
  let tags = [];
  let sort = null;
  let addContent = null;
  const tagsMatch = query.match(/tags:(\w+)/);
  const sortMatch = query.match(/sort:(\w+)/);
  const addMatch = query.match(/^add \"(.*?)\"/);

  if (tagsMatch) {
    tags = tagsMatch[1].split(',').map(str => str.trim());
  }

  if (sortMatch) {
    sort = sortMatch[1];
  }

  if (addMatch) {
    type = 'add';
    addContent = addMatch[1];
  }

  return { query, type, tags, sort, addContent, parsedQuery: query.replace(/tags:\w+/, '').replace(/sort:\w+/, '').trim() };
}

module.exports = queryParser;
