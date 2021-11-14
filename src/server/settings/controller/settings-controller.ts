import { Response, Request } from 'express';
import { ISettingsService } from '../services/settings-service.interface';
import { ISettingsController } from './settings-controller.interface';

export class SettingsController implements ISettingsController {
  constructor(private settingsService: ISettingsService) {}

  async getSettings(req: Request, res: Response): Promise<void> {
    try {
      const value = await this.settingsService.getSettings();
      res.status(200).send(value);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async updateSettings(req: Request, res: Response): Promise<void> {
    const settings = req.body;
    try {
      await this.settingsService.updateSettings(settings);
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
