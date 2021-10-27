import { SettingsRepository } from '../repository/settings-repository.interface';
import { Settings } from '../types/settings.types';
import { ISettingsService } from './settings-service.interface';

export class SettingsService implements ISettingsService {
  constructor(private settingsRepository: SettingsRepository) {}

  async getSettings(): Promise<Settings> {
    return this.settingsRepository.getSettings();
  }

  async updateSettings(newSettings: Settings): Promise<void> {
    await this.settingsRepository.updateSettings(newSettings);
  }
}
