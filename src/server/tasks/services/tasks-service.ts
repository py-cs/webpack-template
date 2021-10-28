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
    let message;
    try {
      tasks = await this.tasksRepository.getTasks();
      message = `Fetched ${tasks.length} task(s)`;
    } catch (error) {
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      message,
    });
    return tasks;
  }

  async createTask(task: Task): Promise<Task> {
    let created;
    let message;
    try {
      created = await this.tasksRepository.createTask(task);
      message = 'Created new task';
    } catch (error) {
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      message,
    });
    return created;
  }

  async updateTask(task: Task): Promise<Task> {
    let updated;
    let message;
    try {
      updated = await this.tasksRepository.updateTask(task);
      message = 'Updated task';
    } catch (error) {
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      message,
    });
    return updated;
  }

  async deleteTask(id: string): Promise<void> {
    let message;
    try {
      await this.tasksRepository.deleteTask(id);
      message = 'Deleted task';
    } catch (error) {
      message = error.message;
    }
    this.loggerRepository.writeLog({
      time: new Date(),
      message,
    });
  }
}
