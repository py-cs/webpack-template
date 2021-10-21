import express from 'express';
import { tasksController } from '../controllers/TasksController';

// eslint-disable-next-line import/prefer-default-export
export const tasksRouter = express.Router();

tasksRouter.get('/', tasksController.getTasks.bind(tasksController));
tasksRouter.post('/', tasksController.createTask.bind(tasksController));
tasksRouter.put('/', tasksController.updateTask.bind(tasksController));
tasksRouter.delete('/:id', tasksController.deleteTask.bind(tasksController));
