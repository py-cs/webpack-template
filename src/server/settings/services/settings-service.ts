import { SettingsRepository } from '../repository/settings-repository.interface';
import { Settings } from '../types/settings.types';
import { ISettingsService } from './settings-service.interface';

// eslint-disable-next-line import/prefer-default-export
export class SettingsService implements ISettingsService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private settingsRepository: SettingsRepository) {}

  async getSettings(): Promise<Settings> {
    return this.settingsRepository.getSettings();
  }

  async updateSettings(newSettings: Settings): Promise<void> {
    await this.settingsRepository.updateSettings(newSettings);
  }
}
