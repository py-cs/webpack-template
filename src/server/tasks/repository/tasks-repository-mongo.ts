import { ObjectId } from 'mongodb';
import * as mongoDB from 'mongodb';
import { TasksRepository } from './tasks-repository.interface';
import Task from '../types/tasks.types';

export class TasksRepositoryMongo implements TasksRepository {
  private collection?: mongoDB.Collection<mongoDB.Document>;

  constructor(
    private connectionString: string,
    private dbName: string,
    private collectionName: string,
  ) {}

  async getCollection(): Promise<mongoDB.Collection<mongoDB.Document>> {
    if (!this.collection) {
      const client = new mongoDB.MongoClient(this.connectionString);
      await client.connect();
      const db = client.db(this.dbName);
      this.collection = db.collection(this.collectionName);
    }
    return this.collection;
  }

  async getTasks(): Promise<Task[]> {
    const collection = await this.getCollection();
    return (await collection.find({}).toArray()) as Task[];
  }

  async createTask(task: Task): Promise<Task> {
    const collection = await this.getCollection();
    const result = await collection.insertOne(task);
    return (await this.collection.findOne({ _id: result.insertedId })) as Task;
  }

  async updateTask(task: Task): Promise<Task> {
    const collection = await this.getCollection();
    const { _id, description } = task as { _id: string; description: string };
    await collection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: { description },
      },
    );
    return task;
  }

  async deleteTask(id: string): Promise<void> {
    const collection = await this.getCollection();
    const query = { _id: new ObjectId(id) };
    await collection.deleteOne(query);
  }
}
