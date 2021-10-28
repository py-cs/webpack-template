import { LoggerRepository } from '../../logs/logger-repository.interface';
import { TasksRepository } from '../repository/tasks-repository.interface';
import Task from '../types/tasks.types';
import { ITasksService } from './tasks-service.interface';

export class TasksService implements ITasksService {
  constructor(
    private tasksRepository: TasksRepository,
    private loggerRepository: LoggerRepository,
  ) {}

  async getTasks(): Promise<Task[]> {
    let tasks;
    let status;
    let message;
    try {
      tasks = await this.tasksRepository.getTasks();
      status = 200;
      message = `Fetched ${tasks.length} task(s)`;
    } catch (error) {
      status = 500;
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      status,
      message,
    });
    return tasks;
  }

  async createTask(task: Task): Promise<Task> {
    let created;
    let status;
    let message;
    try {
      created = await this.tasksRepository.createTask(task);
      status = 201;
      message = 'Created new task';
    } catch (error) {
      status = 500;
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      status,
      message,
    });
    return created;
  }

  async updateTask(task: Task): Promise<Task> {
    let updated;
    let status;
    let message;
    try {
      updated = await this.tasksRepository.updateTask(task);
      status = 202;
      message = 'Updated task';
    } catch (error) {
      status = 500;
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      status,
      message,
    });
    return updated;
  }

  async deleteTask(id: string): Promise<void> {
    let status;
    let message;
    try {
      await this.tasksRepository.deleteTask(id);
      status = 204;
      message = 'Deleted task';
    } catch (error) {
      status = 500;
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      status,
      message,
    });
  }
}
