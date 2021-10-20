import { Response, Request } from 'express';
import { getValue, setValue } from '../services/pg.service';

// eslint-disable-next-line import/prefer-default-export
export class SettingsController {
  static async getSettings(req: Request, res: Response): Promise<void> {
    try {
      const value = await getValue();
      res.status(200).send(value);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateSettings(req: Request, res: Response): Promise<void> {
    const { value } = req.body;
    try {
      await setValue(value);
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
