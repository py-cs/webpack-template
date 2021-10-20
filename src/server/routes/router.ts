import express from 'express';
import cors from 'cors';
import { tasksRouter } from './tasks.router';
import { settingsRouter } from './settings.router';

// eslint-disable-next-line import/prefer-default-export
export const router = express.Router();

router.use(cors());
router.use(express.json());
router.use('/tasks', tasksRouter);
router.use('/settings', settingsRouter);
