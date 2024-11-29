import express, { Express, Request, Response } from "express";
import { loggerMiddleware } from "./loggerMiddleware";
import { paginationMiddleware } from "./paginationMiddleware";
import filmRoutes from "./routes";

const app: Express = express();
app.use(express.json());
app.use((req: Request, res: Response, next) => {
  loggerMiddleware(req, res, next);
});

app.use((req: Request, res: Response, next) => {
  paginationMiddleware(req, res, next);
});

app.use("/", filmRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export { app };
