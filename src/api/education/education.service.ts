import { ApiError } from "../../utils/apiError.util";
import {
  createEducation,
  deleteEducation,
  findAllEducation,
  findEducationById,
  updateEducationById,
} from "./education.repository";
import { Education } from "./education.type";

export const getAllEducation = async () => {
  const educations = await findAllEducation();

  return educations;
};
export const getEducationById = async (id: number) => {
  const education = await findEducationById(id);
  if (!education) throw new ApiError(404, "Data not found");

  return education;
};

export const postEducation = async (body: Education) => {
  const education = await createEducation(body);

  return education;
};

export const putEducationById = async (id: number, body: Education) => {
  await getEducationById(id);
  const education = await updateEducationById(id, body);

  return education;
};

export const deleteEducationById = async (id: number) => {
  await getEducationById(id);
  const education = await deleteEducation(id);

  return education;
};
