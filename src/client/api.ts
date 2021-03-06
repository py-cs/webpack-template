/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const HOST = process.env.REACT_APP_HOST;
const BASE_URL = `http://${HOST}/api`;
const TASKS_URL = `${BASE_URL}/tasks`;
const SETTINGS_URL = `${BASE_URL}/settings`;

export interface Task {
  _id?: string;
  description: string;
}

export interface Settings {
  altTemplate: boolean;
}

export const apiGetTasks = (): Promise<Task[]> =>
  axios.get(TASKS_URL).then((resp) => resp.data);

export const apiAddTask = (description: string): Promise<Task> =>
  axios.post(TASKS_URL, { description }).then((resp) => resp.data);

export const apiUpdateTask = (task: Task): Promise<void> =>
  axios.put(TASKS_URL, task).then((resp) => resp.data);

export const apiDeleteTask = (id: string): Promise<void> =>
  axios.delete(`${TASKS_URL}/${id}`).then((resp) => resp.data);

export const apiGetAltTemplate = (): Promise<Settings> =>
  axios.get(SETTINGS_URL).then((resp) => resp.data);

export const apiUpdateAltTemplate = (settings: Settings): Promise<Settings> =>
  axios.put(SETTINGS_URL, settings).then((resp) => resp.data);
