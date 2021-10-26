import express, { Router } from 'express';
import { ISettingsController } from '../controller/settings-controller.interface';

// eslint-disable-next-line import/prefer-default-export
export const createSettingsRouter = (
  controller: ISettingsController,
): Router => {
  const settingsRouter = express.Router();
  settingsRouter.get('/', controller.getSettings);
  settingsRouter.put('/', controller.updateSettings);
  return settingsRouter;
};
