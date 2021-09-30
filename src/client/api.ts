import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const apiGetTasks = () => {
  return axios.get(API_URL).then((resp) => resp.data);
};

export const apiAddTask = (task: string) => {
  return axios
    .post(API_URL, {
      task,
    })
    .then((resp) => resp.data);
};
