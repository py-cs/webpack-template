import { ILoggerRepository } from './logger-repository.interface';
import { ILoggerService } from './logger-service.interface';
import { LogAction } from './logger.types';

export class LoggerService implements ILoggerService {
  constructor(private repository: ILoggerRepository) {}

  async logAction(action: LogAction): Promise<void> {
    await this.repository.writeLog(action);
  }
}
