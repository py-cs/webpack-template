// eslint-disable-next-line max-classes-per-file
import { Response, Request } from 'express';
import { ObjectId } from 'mongodb';
import Task from '../models/task';
import { fileLogger } from '../services/fileLogger.service';
import { collections } from '../services/mongo.service';

export interface LogAction {
  time: Date;
  status: number;
  message: string;
}

export interface HistoryLogger {
  logAction: (action: LogAction) => void;
}

class TasksController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private logger: HistoryLogger) {}

  async getTasks(_req: Request, res: Response): Promise<void> {
    let status;
    let message;
    try {
      const tasks = (await collections.tasks.find({}).toArray()) as Task[];
      status = 200;
      message = `Fetched ${tasks.length} tasks(s)`;
      res.status(status).send(tasks);
    } catch (error) {
      status = 500;
      message = error.message;
      res.status(500).send(message);
    }
    const time = new Date();
    this.logger.logAction({ time, status, message });
  }

  async createTask(req: Request, res: Response): Promise<void> {
    let status;
    let message;
    let created;
    try {
      const newTask = req.body as Task;
      const result = await collections.tasks.insertOne(newTask);
      if (result) {
        status = 201;
        message = `Successfully created a new task with id ${result.insertedId}`;
        created = await collections.tasks.findOne({
          _id: result.insertedId,
        });
      } else {
        status = 500;
        message = 'Failed to create a new task.';
      }
    } catch (error) {
      status = 400;
      message = error.message;
    }
    res.status(status).send(created || message);
    const time = new Date();
    this.logger.logAction({ time, status, message });
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    let status;
    let message;
    try {
      const { _id, description } = req.body;
      const result = await collections.tasks.updateOne(
        { _id: new ObjectId(_id) },
        {
          $set: { description },
        },
      );
      if (result.modifiedCount) {
        status = 200;
        message = `Successfully updated task with id ${_id}`;
      } else {
        status = 304;
        message = `Task with id: ${_id} not updated`;
      }
    } catch (error) {
      status = 400;
      message = error.message;
    }
    res.status(status).send(message);
    const time = new Date();
    this.logger.logAction({ time, status, message });
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    let status;
    let message;
    const id = req?.params?.id;
    try {
      const query = { _id: new ObjectId(id) };
      const result = await collections.tasks.deleteOne(query);
      if (result && result.deletedCount) {
        status = 202;
        message = `Successfully removed task with id ${id}`;
      } else if (!result) {
        status = 400;
        message = `Failed to remove task with id ${id}`;
      } else if (!result.deletedCount) {
        status = 404;
        message = `Task with id ${id} does not exist`;
      }
    } catch (error) {
      status = 400;
      message = error.message;
    }
    res.status(status).send(message);
    const time = new Date();
    this.logger.logAction({ time, status, message });
  }
}

export const tasksController = new TasksController(fileLogger);
