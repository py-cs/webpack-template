import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import App from '../client/App';

const app = express();
const PORT = 5000;

let tasks = [
  { id: '1', description: 'test 1' },
  { id: '2', description: 'test 2' },
  { id: '3', description: 'test 3' },
];

app.use(cors());
app.use(express.json());
app.use(express.static('dist/client'));

app.get('/api', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(tasks));
});

app.post('/api', (req: express.Request, res: express.Response) => {
  const { task } = req.body;
  const id = +tasks[tasks.length - 1].id + 1;
  const newTask = { id: id.toString(), description: task };
  tasks.push(newTask);
  return res.send(JSON.stringify(newTask));
});

app.put('/api', (req: express.Request, res: express.Response) => {
  const { id, description } = req.body.task;
  const taskToUpdate = tasks.find((task) => task.id === id);
  taskToUpdate.description = description;
  return res.sendStatus(200);
});

app.delete('/api', (req: express.Request, res: express.Response) => {
  const { id } = req.query;
  tasks = tasks.filter((task) => task.id !== id);
  return res.sendStatus(204);
});

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
  res.contentType('text/html');
  res.status(200);
  return res.send(indexHTML);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
