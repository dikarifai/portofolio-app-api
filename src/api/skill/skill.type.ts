import { Request } from "express";

export interface Skill {
  id: number;
  name: string;
  createdAt: Date;
  updateAt: Date;
}

export interface SkillRequest extends Request {
  body: Skill;
}
