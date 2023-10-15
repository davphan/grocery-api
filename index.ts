import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/getTest", (req: Request, res: Response) => {
  res.status(200).send({
    fname: "Chris",
    lname: "Phan"
  })
});

app.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
})