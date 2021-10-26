import { Response, Request } from 'express';

// eslint-disable-next-line import/prefer-default-export
export interface ISettingsController {
  getSettings: (req: Request, res: Response) => Promise<void>;
  updateSettings: (req: Request, res: Response) => Promise<void>;
}
