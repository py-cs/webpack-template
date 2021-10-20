/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TASKS_URL = `${BASE_URL}/tasks`;
const SETTINGS_URL = `${BASE_URL}/settings`;

export interface Task {
  id: string;
  description: string;
}

export const apiGetTasks = (): Promise<string[]> =>
  axios.get(TASKS_URL).then((resp) => resp.data);

export const apiAddTask = (task: string): Promise<void> =>
  axios
    .post(TASKS_URL, {
      task,
    })
    .then((resp) => resp.data);

export const apiUpdateTask = (task: Task): Promise<void> =>
  axios
    .put(TASKS_URL, {
      task,
    })
    .then((resp) => resp.data);

export const apiDeleteTask = (id: string): Promise<void> =>
  axios
    .delete(TASKS_URL, {
      params: {
        id,
      },
    })
    .then((resp) => resp.data);

export const apiGetAltTemplate = (): Promise<boolean> =>
  axios.get(SETTINGS_URL).then((resp) => resp.data.value);

export const apiUpdateAltTemplate = (value: boolean): Promise<void> =>
  axios
    .put(SETTINGS_URL, {
      value,
    })
    .then((resp) => resp.data);
