import prisma from "../../db";
import { Summary } from "./summary.type";

export const findFirstSummary = async () => {
  const summary = await prisma.summary.findFirst();

  return summary;
};

export const createSummarry = async (data: Summary) => {
  const summary = await prisma.summary.create({ data: data });

  return summary;
};
