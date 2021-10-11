import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface Task {
  id: string;
  description: string;
}

export const apiGetTasks = (): Promise<string[]> => axios.get(API_URL).then((resp) => resp.data);

export const apiAddTask = (task: string): Promise<void> => axios
  .post(API_URL, {
    task,
  })
  .then((resp) => resp.data);

export const apiUpdateTask = (task: Task): Promise<void> => axios
  .put(API_URL, {
    task,
  })
  .then((resp) => resp.data);

export const apiDeleteTask = (id: string): Promise<void> => axios
  .delete(API_URL, {
    params: {
      id,
    },
  })
  .then((resp) => resp.data);
