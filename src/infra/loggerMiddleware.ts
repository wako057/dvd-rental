import {Request, Response} from "express";
import {logger} from "./logger";
import {Logger} from "winston";

declare global {
  namespace Express {
    interface Request {
      logger: Logger; // or a specific logger type
    }
  }
}

const loggerMiddleware = (req: Request, res: Response, next: any) => {
  req.logger = logger;
  logger.info(`${req.method} ${req.path}`);
  next();
}

export { loggerMiddleware };