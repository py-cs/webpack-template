import { Response, Request } from 'express';

export interface ISettingsController {
  getSettings: (req: Request, res: Response) => Promise<void>;
  updateSettings: (req: Request, res: Response) => Promise<void>;
}
