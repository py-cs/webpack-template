import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import App from '../client/App';
import { connectToDatabase } from './services/mongo.service';
import { connectToPG } from './services/pg.service';
import { router } from './routes/router';

const app = express();
const PORT = 5000;

Promise.all([connectToPG(), connectToDatabase()])
  .then(() => {
    app.use(express.static('dist/client'));

    app.use('/api', router);

    app.use('*', (req: express.Request, res: express.Response) => {
      let indexHTML = fs.readFileSync(
        path.resolve('./dist/client/index.html'),
        {
          encoding: 'utf8',
        },
      );
      indexHTML = indexHTML.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(<App />)}</div>`,
      );
      return res.contentType('text/html').status(200).send(indexHTML);
    });

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });
