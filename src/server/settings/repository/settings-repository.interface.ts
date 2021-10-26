import { Settings } from '../types/settings.types';

export interface SettingsRepository {
  getSettings: () => Promise<Settings>;
  updateSettings: (newSettings: Settings) => void;
}
