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
          htmlStr += `
            <div class="result">
              <p class="text">${result.text}</p>
            </div>
          `;
        }
        else if (result.type === 'rosetta-code') {
          htmlStr += `
            <div class="result">
              <h4 class="title">${result.title}</h4>
              <p class="url">${result.url}</p>
              <iframe src=${result.url} width="100%" height="300"></iframe>
            </div>
          `;
        }
        else if (result.type === 'cheat-sheet') {
          htmlStr += `
            <div class="result">
              <h4 class="title">Cheat Sheet for: ${query}</h4>
              <p class="url">${result.url}</p>
              <iframe src=${result.url} width="100%" height="300"></iframe>
            </div>
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
