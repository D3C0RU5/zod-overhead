import { Request, Response } from "express";
import { overheadSchema } from "../mock/overheadSchema";
import { overheadObject } from "../mock/overheadObject";

let count = 0;

export const controller = (req: Request, res: Response) => {
  count++;

  let result: any = { success: null };
  const validate = req.query.validate ? true : false;
  if (req.query.validate) {
    result = overheadSchema.safeParse(overheadObject);
  }
  const start = process.hrtime();
  const diff = process.hrtime(start);
  const time = diff[0] * 1e3 + diff[1] * 1e-6;

  res.json({
    count,
    validate,
    time: `Request took ${time.toFixed(3)} ms`,
    result: result.success,
  });
};
