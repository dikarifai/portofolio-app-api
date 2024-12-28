import express, { NextFunction, Request, Response } from "express";
import {
  deleteSkillById,
  getAllSkill,
  getSkillById,
  postSkill,
  putSkillById,
} from "./skill.service";
import { SkillRequest } from "./skill.type";
import { validateRequest } from "../../middlewares/validate.middleware";
import { postSkillScema } from "./skill.valdaite";

const route = express.Router();

route.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await getAllSkill();

    res.send({ status: "success", data: skills });
  } catch (error) {
    next(error);
  }
});

route.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const skill = await getSkillById(id);
    res.send({
      status: "success",
      data: skill,
    });
  } catch (error) {
    next(error);
  }
});

route.post(
  "/",
  validateRequest(postSkillScema),
  async (req: SkillRequest, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      const skill = await postSkill(body);

      res.send({ status: "success", data: skill });
    } catch (error) {
      next(error);
    }
  }
);

route.put(
  "/:id",
  validateRequest(postSkillScema),
  async (req: SkillRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
      const skill = await putSkillById(id, body);

      res.send({
        status: "success",
        message: "Data has been updated",
        data: skill,
      });
    } catch (error) {
      next(error);
    }
  }
);

route.delete(
  "/:id",
  async (req: SkillRequest, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
      const skill = await deleteSkillById(id);

      res.send({
        status: "success",
        message: "Data has been deleted",
        data: skill,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default route;
