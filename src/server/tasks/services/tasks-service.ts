import { TasksRepository } from '../repository/tasks-repository.interface';
import Task from '../types/tasks.types';
import { ITasksService } from './tasks-service.interface';

export class TasksService implements ITasksService {
  constructor(private tasksRepository: TasksRepository) {}

  async getTasks(): Promise<Task[]> {
    return this.tasksRepository.getTasks();
  }

  async createTask(task: Task): Promise<Task> {
    return this.tasksRepository.createTask(task);
  }

  async updateTask(task: Task): Promise<Task> {
    return this.tasksRepository.updateTask(task);
  }

  async deleteTask(id: string): Promise<void> {
    return this.tasksRepository.deleteTask(id);
  }
}
