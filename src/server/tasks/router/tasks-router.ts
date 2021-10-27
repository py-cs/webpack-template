import express, { Router } from 'express';
import { ITasksController } from '../controller/tasks-controller.interface';

export const createTasksRouter = (controller: ITasksController): Router => {
  const tasksRouter = express.Router();
  tasksRouter.get('/', controller.getTasks.bind(controller));
  tasksRouter.post('/', controller.createTask.bind(controller));
  tasksRouter.put('/', controller.updateTask.bind(controller));
  tasksRouter.delete('/:id', controller.deleteTask.bind(controller));
  return tasksRouter;
};
