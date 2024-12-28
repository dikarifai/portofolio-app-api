import express, { NextFunction, Request, Response } from "express";
import { ExperienceRequest } from "./experience.type";
import {
  deleteExperienceById,
  getAllExperience,
  getExperienceById,
  postExperience,
  putExperienceById,
} from "./experience.service";
import { validateRequest } from "../../middlewares/validate.middleware";
import {
  patchExperienceSchema,
  postExperienceSchema,
} from "./experience.validate";

const route = express.Router();

route.get(
  "/",
  async (req: ExperienceRequest, res: Response, next: NextFunction) => {
    try {
      const experiences = await getAllExperience();

      res.send({
        status: "success",
        data: experiences,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.get(
  "/:id",
  async (req: ExperienceRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
      const experience = await getExperienceById(id);

      res.send({
        status: "success",
        data: experience,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  validateRequest(postExperienceSchema),
  async (req: ExperienceRequest, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      const experience = await postExperience(req.body);

      res.status(201).send({ status: "success", data: experience });
    } catch (error) {
      next(error);
    }
  }
);

route.patch(
  "/:id",
  validateRequest(patchExperienceSchema),
  async (req: ExperienceRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
      const experience = await putExperienceById(id, body);

      res.status(200).send({
        status: "success",
        message: "Data has been updated",
        data: experience,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.put(
  "/:id",
  validateRequest(postExperienceSchema),
  async (req: ExperienceRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
      const experience = await putExperienceById(id, body);

      res.status(200).send({
        status: "success",
        message: "Data has been updated",
        data: experience,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
      const experience = await deleteExperienceById(id);

      res.send({
        status: "success",
        message: `Data from id "${id}" has been deleted`,
        data: experience,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default route;
