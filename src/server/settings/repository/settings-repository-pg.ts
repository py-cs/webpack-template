import { Client, ClientConfig } from 'pg';
import { Settings } from '../types/settings.types';
import { SettingsRepository } from './settings-repository.interface';

const INIT_QUERY = `
CREATE TABLE IF NOT EXISTS settings (
  name VARCHAR(30) NOT NULL UNIQUE,
  value BOOLEAN NOT NULL
);
INSERT INTO settings VALUES (
  'altTemplate',
  false
) ON CONFLICT DO NOTHING;
`;

export class SettingsRepositoryPG implements SettingsRepository {
  client?: Client;

  constructor(private config: ClientConfig) {
    console.log(this.config);
  }

  async getClient(): Promise<Client> {
    if (!this.client) {
      this.client = new Client({
        ...this.config,
      });
      await this.client.connect();
      await this.client.query(INIT_QUERY);
    }
    return this.client;
  }

  async getSettings(): Promise<Settings> {
    const field = 'altTemplate';
    const client = await this.getClient();
    const res = await client.query('SELECT value FROM settings WHERE name=$1', [
      field,
    ]);
    return { [field]: res.rows[0].value };
  }

  async updateSettings(newSettings: Settings): Promise<void> {
    const client = await this.getClient();
    const [name, value] = Object.entries(newSettings)[0];
    await client.query('UPDATE settings SET value=$1 WHERE name=$2', [
      value,
      name,
    ]);
  }
}
