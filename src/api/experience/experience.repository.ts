import prisma from "../../db";
import { Experience, ExperienceRequest } from "./experience.type";

export const findExperience = async () => {
  const experiences = await prisma.experience.findMany();

  return experiences;
};
export const findExperienceById = async (id: number) => {
  const experience = await prisma.experience.findUnique({ where: { id: id } });

  return experience;
};

export const createExperience = async (data: Experience) => {
  const experience = await prisma.experience.create({ data: data });

  return experience;
};

export const updateExperienceById = async (id: number, data: Experience) => {
  const experience = await prisma.experience.update({
    where: { id: id },
    data: data,
  });
};

export const deleteExperience = async (id: number) => {
  const experience = await prisma.experience.delete({
    where: { id: id },
  });

  return experience;
};
