import { Settings } from '../types/settings.types';

export interface ISettingsService {
  getSettings: () => Promise<Settings>;
  updateSettings: (newSettings: Settings) => Promise<void>;
}
