import fs from 'fs';
import dotenv from 'dotenv';
import { HistoryLogger, LogAction } from '../controllers/TasksController';

dotenv.config();

class FileLoggerService implements HistoryLogger {
  // eslint-disable-next-line no-useless-constructor
  constructor(private fileName: string) {}

  logAction = (action: LogAction) => {
    const record = `${action.time}\t${action.status}\t${action.message}\n`;
    fs.writeFile(this.fileName, record, { flag: 'a+' }, (err) => {
      if (err) console.error('Writting to log file failed');
    });
  };
}

// eslint-disable-next-line import/prefer-default-export
export const fileLogger = new FileLoggerService(process.env.HISTORY_FILENAME);
