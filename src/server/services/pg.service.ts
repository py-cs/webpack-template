import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.PG_URI,
  ssl: { rejectUnauthorized: false },
});

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

export const connectToPG = async (): Promise<void> => {
  await client.connect();
  const res = await client.query(INIT_QUERY);
  return res;
};

export const getValue = async (): Promise<boolean> => {
  const res = await client.query(
    "SELECT value FROM settings WHERE name='altTemplate'",
  );
  return res.rows[0];
};

export const setValue = async (newValue: boolean): Promise<void> => {
  const res = await client.query(
    "UPDATE settings SET value=$1 WHERE name='altTemplate'",
    [newValue],
  );
  return res.rows;
};
