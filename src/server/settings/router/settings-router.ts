import express, { Router } from 'express';
import { ISettingsController } from '../controller/settings-controller.interface';

export const createSettingsRouter = (
  controller: ISettingsController,
): Router => {
  const settingsRouter = express.Router();
  settingsRouter.get('/', controller.getSettings.bind(controller));
  settingsRouter.put('/', controller.updateSettings.bind(controller));
  return settingsRouter;
};
