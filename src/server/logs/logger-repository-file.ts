import fs from 'fs';
import { LoggerRepository } from './logger-repository.interface';
import { LogAction } from './logger.types';

export class FileLoggerRepository implements LoggerRepository {
  constructor(private logFileName: string) {}

  async writeLog(action: LogAction): Promise<void> {
    const record = `${action.time}\t${action.status}\t${action.message}\n`;
    fs.writeFile(this.logFileName, record, { flag: 'a+' }, (err) => {
      if (err) console.error('Writting to log file failed');
    });
  }
}
