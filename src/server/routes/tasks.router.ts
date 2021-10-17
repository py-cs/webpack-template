import express, { Request, Response } from 'express';
import cors from 'cors';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import Task from '../models/task';

// eslint-disable-next-line import/prefer-default-export
export const tasksRouter = express.Router();

tasksRouter.use(cors());
tasksRouter.use(express.json());

tasksRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const tasks = (await collections.tasks.find({}).toArray()) as Task[];
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

tasksRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newTask = req.body as Task;
    const result = await collections.tasks.insertOne(newTask);
    if (result) {
      res
        .status(201)
        .send(`Successfully created a new task with id ${result.insertedId}`);
    } else {
      res.status(500).send('Failed to create a new task.');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

tasksRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updatedTask: Task = req.body as Task;
    const query = { _id: new ObjectId(id) };

    const result = await collections.tasks.updateOne(query, {
      $set: updatedTask,
    });

    if (result) {
      res.status(200).send(`Successfully updated task with id ${id}`);
    } else {
      res.status(304).send(`Task with id: ${id} not updated`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

tasksRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;
  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.tasks.deleteOne(query);
    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed task with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove task with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Task with id ${id} does not exist`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});
