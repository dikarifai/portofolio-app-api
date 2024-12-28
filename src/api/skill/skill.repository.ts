import prisma from "../../db";
import { ApiError } from "../../utils/apiError.util";
import { Skill } from "./skill.type";

export const findAllSkill = async () => {
  const skills = await prisma.skill.findMany();

  return skills;
};

export const findSkillById = async (id: number) => {
  const skill = await prisma.skill.findUnique({ where: { id } });
  if (!skill) throw new ApiError(404, "Data not found");

  return skill;
};

export const createSkill = async (data: Skill) => {
  const skill = await prisma.skill.create({ data });

  return skill;
};

export const updateSkillById = async (id: number, data: Skill) => {
  const skill = await prisma.skill.update({ where: { id }, data });

  return skill;
};

export const deleteSkill = async (id: number) => {
  const skill = await prisma.skill.delete({ where: { id } });

  return skill;
};
