import express from 'express';
import { SettingsController } from '../controllers/SettingsController';

// eslint-disable-next-line import/prefer-default-export
export const settingsRouter = express.Router();

settingsRouter.get('/', SettingsController.getSettings);
settingsRouter.put('/', SettingsController.updateSettings);
