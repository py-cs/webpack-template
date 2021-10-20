import { ObjectId } from 'mongodb';

export default class Task {
  // eslint-disable-next-line no-useless-constructor
  constructor(public description: string, public id?: ObjectId) {}
}
