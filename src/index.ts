import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { initializeDB } from "./DataSource.js";
import { getUsers, createUser, deleteUser, updateUser } from "./Queries.js";

dotenv.config();
const port = process.env.PORT;

initializeDB();

const app: Express = express();
app.use(express.json());

app.get("/getUsers", getUsers);

app.post("/createUser", createUser);

app.post("/deleteUser", deleteUser);

app.put("/updateUser", updateUser);

app.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
})

export default app;