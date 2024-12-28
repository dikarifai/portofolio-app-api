import { ApiError } from "../../utils/apiError.util";
import {
  createSkill,
  deleteSkill,
  findAllSkill,
  findSkillById,
  updateSkillById,
} from "./skill.repository";
import { Skill } from "./skill.type";

export const getAllSkill = async () => {
  const skill = await findAllSkill();

  return skill;
};

export const getSkillById = async (id: number) => {
  const skill = await findSkillById(id);
  if (!skill) throw new ApiError(404, "Data not found");

  return skill;
};

export const postSkill = async (body: Skill) => {
  const skill = await createSkill(body);

  return skill;
};

export const putSkillById = async (id: number, body: Skill) => {
  await getSkillById(id);
  const skill = await updateSkillById(id, body);

  return skill;
};

export const deleteSkillById = async (id: number) => {
  await getSkillById(id);
  const skill = await deleteSkill(id);

  return skill;
};
