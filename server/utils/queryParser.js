'use strict';

function queryParser(query) {
  let type = 'search';
  let tags = [];
  let sort = null;
  let addContent = null;
  const tagsRegex = query.match(/tags:(.*)/);
  const sortRegex = query.match(/sort:(\w+)/);
  const addRegex = query.match(/^add \"(.*)\"/);

  if (tagsRegex) {
    tags = tagsRegex[1].split(',').map(str => str.trim());
  }

  if (sortRegex) {
    sort = sortRegex[1];
  }

  if (addRegex) {
    type = 'add';
    addContent = addRegex[1];
  }

  return { query, type, tags, sort, addContent };
}

module.exports = queryParser;
