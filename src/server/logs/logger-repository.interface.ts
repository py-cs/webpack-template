import { LogAction } from './logger.types';

export interface LoggerRepository {
  writeLog: (action: LogAction) => Promise<void>;
}
