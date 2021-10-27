import { Response, Request } from 'express';
import { ILoggerService } from '../../logs/logger-service.interface';
import { ITasksService } from '../services/tasks-service.interface';
import Task from '../types/tasks.types';
import { ITasksController } from './tasks-controller.interface';

export class TasksController implements ITasksController {
  constructor(
    private tasksService: ITasksService,
    private logger: ILoggerService,
  ) {}

  async getTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.tasksService.getTasks();
      res.status(200).send(tasks);
      this.logger.logAction({
        time: new Date(),
        status: 200,
        message: `Fetched ${tasks.length} task(s)`,
      });
    } catch (error) {
      res.status(400).send(error.message);
      this.logger.logAction({
        time: new Date(),
        status: 400,
        message: 'Failed to fetch tasks',
      });
    }
  }

  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const task = req.body as Task;
      const created = await this.tasksService.createTask(task);
      res.status(201).send(created);
      this.logger.logAction({
        time: new Date(),
        status: 201,
        message: 'Created new task',
      });
    } catch (error) {
      res.status(400).send(error.message);
      this.logger.logAction({
        time: new Date(),
        status: 400,
        message: 'Failed to create task',
      });
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const task = req.body as Task;
      const updated = await this.tasksService.updateTask(task);
      res.status(200).send(updated);
      this.logger.logAction({
        time: new Date(),
        status: 201,
        message: 'Updated task',
      });
    } catch (error) {
      res.status(400).send(error.message);
      this.logger.logAction({
        time: new Date(),
        status: 400,
        message: 'Failed to update task',
      });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const id = req?.params?.id;
      await this.tasksService.deleteTask(id);
      res.status(202).send();
      this.logger.logAction({
        time: new Date(),
        status: 202,
        message: 'Deleted task',
      });
    } catch (error) {
      res.status(400).send(error.message);
      this.logger.logAction({
        time: new Date(),
        status: 400,
        message: 'Failed to delete task',
      });
    }
  }
}
