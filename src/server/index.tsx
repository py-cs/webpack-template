import express from 'express';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import App from '../client/App';
import { connectToDatabase } from './services/database.service';
import { tasksRouter } from './routes/tasks.router';

const app = express();
const PORT = 5000;

// let tasks = [
//   { id: '1', description: 'test 1' },
//   { id: '2', description: 'test 2' },
//   { id: '3', description: 'test 3' },
// ];

connectToDatabase()
  .then(() => {
    app.use('/api', tasksRouter);

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });
