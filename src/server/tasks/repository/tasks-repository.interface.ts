import Task from '../types/tasks.types';

export interface TasksRepository {
  getTasks: () => Promise<Task[]>;
  createTask: (task: Task) => Promise<Task>;
  updateTask: (task: Task) => Promise<Task>;
  deleteTask: (id: string) => Promise<void>;
}
