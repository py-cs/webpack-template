import * as express from "express";
import * as cors from "cors";

const app = express();
const PORT = 5000;

const tasks = ["test 1", "test 2", "test 3"];

app.use(cors());
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(tasks));
});

app.post("/", (req: express.Request, res: express.Response) => {
  const { task } = req.body;
  tasks.push(task);
  return res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
