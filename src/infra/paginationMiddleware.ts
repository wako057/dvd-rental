import { Request, Response } from "express";
import { Logger } from "winston";

export type Paginate = {
  limit: number;
  offset: number;
};

declare global {
  namespace Express {
    interface Request {
      logger: Logger; // or a specific logger type
      pagination?: Paginate;
    }
  }
}

function validateContentRange(contentRange: string): boolean {
  // Vérifie que l'en-tête suit le format "items start-end/total"
  const regex = /^items \d+-\d+/;
  console.log(
    "header: >",
    contentRange,
    "<",
    "res test: ",
    regex.test(contentRange),
  );
  return regex.test(contentRange);
}

function getRange(headerContentRange: string): Promise<Paginate> {
  return new Promise((resolve, reject) => {
    let limit;
    let offset = 0;

    const regex = /^items (\d+)-(\d+)/;
    const matches = regex.exec(headerContentRange);
    if (matches !== null) {
      console.log(matches);
      offset = parseInt(matches[1], 10) - 1;
      limit = parseInt(matches[2], 10) - offset;
    } else {
      reject({
        code: 400,
        message: "Range header not valid",
      });
    }

    const limitMax = 1000;

    if (!limit) {
      limit = limitMax;
    } else if (limit > limitMax) {
      reject({
        code: 413,
        message: "Request entity too large",
      });
    } else if (limit <= 0) {
      reject({
        code: 400,
        message: "X-Range is malformed",
      });
    }

    offset = offset < 0 ? 0 : offset;

    resolve({ limit: limit, offset: offset });
  });
}

const paginationMiddleware = async (req: Request, res: Response, next: any) => {
  const headerContentRange = req.headers["content-range"];
  if (headerContentRange) {
    const validContentRangeHeader = validateContentRange(headerContentRange);
    try {
      const paginationInfo = await getRange(headerContentRange);
      req.logger.debug(`parsed: ${JSON.stringify(paginationInfo)}`);
      req.pagination = paginationInfo;
    } catch (err: any) {
      req.logger.error(err);
    }
  }
  next();
};

export { paginationMiddleware };
