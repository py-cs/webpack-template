import { Response, Request } from 'express';
import { ITasksService } from '../services/tasks-service.interface';
import Task from '../types/tasks.types';
import { ITasksController } from './tasks-controller.interface';

export class TasksController implements ITasksController {
  constructor(private tasksService: ITasksService) {}

  async getTasks(req: Request, res: Response): Promise<void> {
    const tasks = await this.tasksService.getTasks();
    res.status(200).send(tasks);
  }

  async createTask(req: Request, res: Response): Promise<void> {
    const task = req.body as Task;
    const created = await this.tasksService.createTask(task);
    res.status(201).send(created);
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const task = req.body as Task;
    const updated = await this.tasksService.updateTask(task);
    res.status(202).send(updated);
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const id = req?.params?.id;
    await this.tasksService.deleteTask(id);
    res.status(204).send();
  }
}
