import { LogAction } from './logger.types';

export interface ILoggerRepository {
  writeLog: (action: LogAction) => Promise<void>;
}
