// src/index.ts
import express, { Express, Request, Response } from "express";
import filmRoutes from './src/infra/routes';
import { loggerMiddleware } from "./src/infra/loggerMiddleware";
import {paginationMiddleware} from "./src/infra/paginationMiddleware";

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use((req: Request, res: Response, next) => {
  loggerMiddleware(req, res, next);
});

app.use((req: Request, res: Response, next) => {
  paginationMiddleware(req, res, next);
});

app.use('/', filmRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});