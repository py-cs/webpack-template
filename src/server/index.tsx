import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import App from '../client/App';
import { connectToDatabase } from './services/mongo.service';
import { connectToPG } from './services/pg.service';
import { router } from './routes/router';
import { createSettingsRouter } from './settings/router/settings-router';
import { SettingsController } from './settings/controller/settings-controller';
import { SettingsService } from './settings/services/settings-service';
import { SettingsRepositoryPG } from './settings/repository/settings-repository-pg';

const app = express();
const PORT = 5000;

dotenv.config();

const settingsRepository = new SettingsRepositoryPG(process.env.PG_URI);
const settingsService = new SettingsService(settingsRepository);
const settingsController = new SettingsController(settingsService);
const settingsRouter = createSettingsRouter(settingsController);

app.use(express.static('dist/client'));

app.use('/api/settings', settingsRouter);

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
