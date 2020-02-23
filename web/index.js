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
        /*
        "urls": [
              {
                "title": "Wall Street Journal reporters protest ‘sick man’ headline in Wall Street Journal - The Washington PostsearchmenumenuWashington Post LogoprofileprofileWashington Post LogocloseEmailBioFollowhomeshareShare on FacebookEmail this linkShare on TwitterShare on PinterestShare on LinkedIncomment",
                "image": "https://www.washingtonpost.com/resizer/HgqYZHYlnU_CnHoKaNA7Gm48tPQ=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EKPG7WSVY4I6VMIZJ6VLVRTHJ4.jpg",
                "icon": "/pf/resources/images/favicon.ico?d=200",
                "snippet": "The headline has angered the Chinese government, which expelled three journalists from the newspaper over it.",
                "url": "http://www.washingtonpost.com/lifestyle/media/wall-street-journal-reporters-protest-sick-man-headline-in-wall-street-journal/2020/02/22/2435ab86-55ab-11ea-929a-64efa7482a77_story.html",
                "crawledAt": "2020-02-23T07:45:02.959Z"
              }
            ],
        */
        else if (result.type === 'record') {
          htmlStr += `
            <div class="result">
              <p class="text">${result.text}</p>
              <small class="time">${result.createdAt}</small>
              ${result.urls.map(url => `
                ${url.image ? `<br/><br/><img src=${url.image} width="100" height="100" />`: ''}
                ${url.title ? `<p class="title">${url.title}</p>`: ''}
                ${url.snippet ? `<p class="snippet">${url.snippet}</p>`: ''}
                ${url.url ? `<p class="url">${url.url}</p>` : ''}
              `).join('\n')}
            </div>
          `;
        }
        else if (result.type === 'message') {
          htmlStr += `
            <div class="result">
              <h4 class="message">${result.text}</h4>
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
