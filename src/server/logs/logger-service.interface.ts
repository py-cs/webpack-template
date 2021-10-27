import { LogAction } from './logger.types';

export interface ILoggerService {
  logAction: (action: LogAction) => void;
}
