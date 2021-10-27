import { Response, Request } from 'express';

export interface ITasksController {
  getTasks: (req: Request, res: Response) => Promise<void>;
  createTask: (req: Request, res: Response) => Promise<void>;
  updateTask: (req: Request, res: Response) => Promise<void>;
  deleteTask: (req: Request, res: Response) => Promise<void>;
}
