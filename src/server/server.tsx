import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import { renderApp } from "../common/renderApp";

const app = express();
const PORT = 5000;

const tasks = ["test 1", "test 2", "test 3"];

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/api", (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(tasks));
});

app.post("/api", (req: express.Request, res: express.Response) => {
  const { task } = req.body;
  tasks.push(task);
  return res.sendStatus(201);
});

app.get("/", (req: express.Request, res: express.Response) => {
  let indexHTML = fs.readFileSync(
    "index.html",
    {
      encoding: "utf8",
    }
  );
  indexHTML = indexHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${renderToString(renderApp())}</div>`
  );
  res.contentType("text/html");
  res.status(200);
  return res.send(indexHTML);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
