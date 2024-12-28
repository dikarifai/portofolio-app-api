import express, { NextFunction, Request, Response } from "express";
import { EducationRequest } from "./education.type";
import {
  deleteEducationById,
  getAllEducation,
  getEducationById,
  postEducation,
  putEducationById,
} from "./education.service";
import { validateRequest } from "../../middlewares/validate.middleware";
import {
  patchEducationSchema,
  postEducationSchema,
} from "./education.validate";

const route = express.Router();

route.get(
  "/",
  async (req: EducationRequest, res: Response, next: NextFunction) => {
    try {
      const educations = await getAllEducation();

      res.send({ status: "success", data: educations });
    } catch (error) {
      next(error);
    }
  }
);
route.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const education = await getEducationById(id);
    res.send({ status: "success", data: education });
  } catch (error) {
    next(error);
  }
});

route.post(
  "/",
  validateRequest(postEducationSchema),
  async (req: EducationRequest, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      const education = await postEducation(body);

      res.send({
        status: "success",
        data: education,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.patch(
  "/:id",
  validateRequest(patchEducationSchema),
  async (req: EducationRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;

    try {
      const education = await putEducationById(id, body);

      res.send({
        status: "success",
        message: "data has been updated",
        data: { education },
      });
    } catch (error) {
      next(error);
    }
  }
);

route.put(
  "/:id",
  validateRequest(postEducationSchema),
  async (req: EducationRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;

    try {
      const education = await putEducationById(id, body);
      res.send({
        status: "success",
        message: "data has been updated",
        data: { education },
      });
    } catch (error) {
      next(error);
    }
  }
);

route.delete(
  "/:id",
  async (req: EducationRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
      const education = await deleteEducationById(id);
      res.send({
        status: "success",
        message: `data from id "${id}" has been deleted`,
        data: education,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default route;
