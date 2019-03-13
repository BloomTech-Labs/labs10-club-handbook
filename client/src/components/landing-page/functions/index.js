const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const next = require('next');

const app = express();

app.get('*', async (req, res) => {
  const nextApp = next({
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        staticFolder: '/public/',
      },
    },
  });
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();
  return handle(req, res);
});

exports.next = functions.https.onRequest(app);
