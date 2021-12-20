import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import App from '../client/App';
import { createSettingsRouter } from './settings/router/settings-router';
import { SettingsController } from './settings/controller/settings-controller';
import { SettingsService } from './settings/services/settings-service';
import { SettingsRepositoryPG } from './settings/repository/settings-repository-pg';
import { TasksRepositoryMongo } from './tasks/repository/tasks-repository-mongo';
import { TasksService } from './tasks/services/tasks-service';
import { TasksController } from './tasks/controller/tasks-controller';
import { createTasksRouter } from './tasks/router/tasks-router';
import { FileLoggerRepository } from './logs/logger-repository-file';

const app = express();
const PORT = 5000;

dotenv.config();

const pgSettings = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: Number(process.env.PG_PORT),
};

const settingsRepository = new SettingsRepositoryPG(pgSettings);
const settingsService = new SettingsService(settingsRepository);
const settingsController = new SettingsController(settingsService);
const settingsRouter = createSettingsRouter(settingsController);

const logsRepository = new FileLoggerRepository(process.env.HISTORY_FILENAME);

const mongoConnString = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

const tasksRepository = new TasksRepositoryMongo(
  mongoConnString,
  process.env.MONGO_DATABASE,
  process.env.TASKS_COLLECTION_NAME,
);
const tasksService = new TasksService(tasksRepository, logsRepository);
const tasksController = new TasksController(tasksService);
const tasksRouter = createTasksRouter(tasksController);

app.use(express.static('dist/client'));
app.use(cors());
app.use(express.json());
app.use('/api/settings', settingsRouter);
app.use('/api/tasks', tasksRouter);

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
  console.log(`Server started at http://${process.env.REACT_APP_HOST}`);
});
