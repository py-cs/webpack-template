import { Client } from 'pg';
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
  client: Client;

  constructor(private connectionString: string) {}

  async connect(): Promise<void> {
    this.client = new Client({
      connectionString: this.connectionString,
      ssl: { rejectUnauthorized: false },
    });
    await this.client.connect();
    await this.client.query(INIT_QUERY);
  }

  async getSettings(): Promise<Settings> {
    const res = await this.client.query(
      "SELECT value FROM settings WHERE name='altTemplate'",
    );
    return res.rows[0];
  }

  async updateSettings(newSettings: Settings): Promise<void> {
    const [name, value] = Object.entries(newSettings);
    await this.client.query('UPDATE settings SET value=$1 WHERE name=$2', [
      value,
      name,
    ]);
  }
}
