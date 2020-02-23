'use strict';

function queryParser(query) {
  let type = 'search';
  let tags = [];
  let sort = null;
  const tagsRegex = query.match(/tags:(.*)/);
  const sortRegex = query.match(/sort:(\w+)/);

  if (tagsRegex) {
    tags = tagsRegex[1].split(',');
  }

  if (sortRegex) {
    sort = sortRegex[1];
  }

  if (query.match(/^add \".*\"/)) {
    type = 'add';
  }

  return { query, type, tags, sort };
}

module.exports = queryParser;
