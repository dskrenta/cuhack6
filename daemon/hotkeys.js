'use strict';

const GK = require('global-keypress');
const open = require('open');

// instantiate
const gk = new GK();

// launch keypress daemon process
gk.start();

let a = [];

// emitted events by process
gk.on('press', async (data) => {
  try {
    if (data.data === '<LCtrl>' || data.data === '<RCtrl>') {
      a.push('ctrl');
    }

    else if (data.data === 'g') {
      if (a.includes('ctrl')) {
        console.log('ctrl+g!');
        await open('https://google.com/');
      };
    }

    else if (data.data === 'p') {
      if (a.includes('ctrl')) {
        console.log('ctrl+p!');
        await open('http://localhost:3000/')
      };
    }

    else if (data.data === '[released <LCtrl>]' || data.data === '[released <RCtrl>]') {
      a = [];
    }
  }
  catch (error) {
    console.error('gk keypress even error', error);
  }
});

// process error
gk.on('error', error => {
  console.error(error);
});

// process closed
gk.on('close', () => {
  console.log('closed');
});

// manual stop
// gk.stop();
