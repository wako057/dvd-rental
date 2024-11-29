import * as express from "express";
import { Logger } from "winston";

declare global {
  namespace Express {
    interface Request {
      logger: Logger; // or a specific logger type
    }
  }
}
