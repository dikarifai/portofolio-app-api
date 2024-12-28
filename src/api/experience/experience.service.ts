import { ApiError } from "../../utils/apiError.util";
import {
  createExperience,
  deleteExperience,
  findExperience,
  findExperienceById,
  updateExperienceById,
} from "./experience.repository";
import { Experience } from "./experience.type";

export const getAllExperience = async () => {
  const experiences = await findExperience();

  return experiences;
};

export const getExperienceById = async (id: number) => {
  const experience = await findExperienceById(id);
  if (!experience) throw new ApiError(404, "Data not found");

  return experience;
};

export const postExperience = async (body: Experience) => {
  const experience = await createExperience(body);

  return experience;
};
export const putExperienceById = async (id: number, body: Experience) => {
  await getExperienceById(id);
  const experience = await updateExperienceById(id, body);

  return experience;
};

export const deleteExperienceById = async (id: number) => {
  const experience = await deleteExperience(id);

  return experience;
};
