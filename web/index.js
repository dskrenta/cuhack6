(() => {
  'use strict';

  const API_URL = 'http://localhost:3000/api';

  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results');

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    updateResults(searchInput.value);
  });

  async function updateResults(query) {
    try {
      const results = await search(query);
      let htmlStr = '';

      for (let result of results) {
        if (result.type === 'text') {
          htmlStr += `<p>${result.text}</p>`;
        }
        else if (result.type === 'rosetta-code') {
          htmlStr += `
            <p>${result.title} - ${result.url}</p>
            <iframe src=${result.url} width="500" height="300"></iframe>
          `;
        }
        else if (result.type === 'cheat-sheet') {
          htmlStr += `
            <p>${result.url}</p>
            <iframe src=${result.url} width="500" height="300"></iframe>
          `;
        }
      }

      resultsContainer.innerHTML = htmlStr;
    }
    catch (error) {
      console.error('update results error', error);
    }
  }

  async function auth() {
    try {
      return null;
    }
    catch (error) {
      console.error('auth error', error);
    }
  }

  async function search(query) {
    try {
      const searchRes = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
      const results = await searchRes.json();
      return results;
    }
    catch (error) {
      console.error('search error', error);
    }
  }
})();
