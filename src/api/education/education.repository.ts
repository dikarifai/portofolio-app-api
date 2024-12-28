import prisma from "../../db";
import { Education } from "./education.type";

export const findAllEducation = async () => {
  const educations = await prisma.education.findMany();

  return educations;
};

export const findEducationById = async (id: number) => {
  const education = await prisma.education.findUnique({ where: { id: id } });

  return education;
};

export const createEducation = async (data: Education) => {
  const education = await prisma.education.create({ data });

  return education;
};
export const updateEducationById = async (id: number, data: Education) => {
  const education = await prisma.education.update({ where: { id }, data });

  return education;
};

export const deleteEducation = async (id: number) => {
  const education = await prisma.education.delete({ where: { id } });

  return education;
};
