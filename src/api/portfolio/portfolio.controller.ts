import express, { NextFunction, Request, Response } from "express";
import {
  deletePortfolioById,
  getAllPortfolio,
  getPortfolioById,
  postPortfolio,
  putPortfolio,
} from "./portfolio.service";
import {
  createPortfolioScema,
  patchPortfolioScema,
} from "./portfolio.validation";
import { validateRequest } from "../../middlewares/validate.middleware";
import { RequestPortfolio } from "./portfolio.type";
import upload from "../../middlewares/upload.middleware";
import parse from "../../middlewares/parse.middleware";

const route = express.Router();

route.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const portfolios = await getAllPortfolio();

    res.send({
      status: "success",
      data: portfolios,
    });
  } catch (error) {
    next(error);
  }
});

route.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const portfolio = await getPortfolioById(id);

    console.log("Get Portfolio", portfolio);

    res.send({
      status: "success",
      data: portfolio,
    });
  } catch (error) {
    next(error);
  }
});

route.post(
  "/",
  upload.single("image"),
  validateRequest(createPortfolioScema),
  async (req: RequestPortfolio, res: Response, next: NextFunction) => {
    try {
      const portfolio = await postPortfolio(req.body);

      res.send({
        status: "success",
        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.put(
  "/:id",
  upload.single("image"),
  validateRequest(createPortfolioScema),
  async (req: RequestPortfolio, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
      const portfolio = await putPortfolio(id, body);

      res.status(201).send({
        status: "success",
        message: "data has been updated",
        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }
);
route.patch(
  "/:id",
  upload.single("image"),
  validateRequest(patchPortfolioScema),
  async (req: RequestPortfolio, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
      const portfolio = await putPortfolio(id, body);

      res.status(201).send({
        status: "success",
        message: "data has been updated",
        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const portfolio = await deletePortfolioById(id);

      res.send({
        status: "success",
        message: `data from ${id} has been daleted`,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default route;
