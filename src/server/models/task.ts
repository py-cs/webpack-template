import { ObjectId } from 'mongodb';

export default class Task {
  constructor(public description: string, public id?: ObjectId) {
    console.log('created task');
  }
}
