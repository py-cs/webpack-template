import fs from 'fs';
import { ILoggerRepository } from './logger-repository.interface';
import { LogAction } from './logger.types';

export class FileLoggerRepository implements ILoggerRepository {
  constructor(private logFileName: string) {}

  async writeLog(action: LogAction): Promise<void> {
    const record = `${action.time}\t${action.status}\t${action.message}\n`;
    fs.writeFile(this.logFileName, record, { flag: 'a+' }, (err) => {
      if (err) console.error('Writting to log file failed');
    });
  }
}
