import Task from '../types/tasks.types';

export interface ITasksService {
  getTasks: () => Promise<Task[]>;
  createTask: (task: Task) => Promise<Task>;
  updateTask: (task: Task) => Promise<Task>;
  deleteTask: (id: string) => Promise<void>;
}
