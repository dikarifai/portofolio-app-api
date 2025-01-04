import express, { NextFunction, Request, Response } from "express";
import { getFirstSummary, postSummary } from "./summary.service";
import { SummaryRequest } from "./summary.type";
import upload from "../../middlewares/upload.middleware";
import { validateRequest } from "../../middlewares/validate.middleware";
import { postSummarySchema } from "./summary.validate";
import { getFullFileUrl } from "../../utils/url.util";

const route = express.Router();

route.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const summary = await getFirstSummary();

    res.send({ status: "success", data: summary });
  } catch (error) {
    next(error);
  }
});

route.post(
  "/",
  upload.array("images", 5),
  validateRequest(postSummarySchema),
  async (req: SummaryRequest, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      const summary = await postSummary(body);

      res.send({ status: "success", data: summary });
    } catch (error) {
      next(error);
    }
  }
);

export default route;
