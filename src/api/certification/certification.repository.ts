import prisma from "../../db";
import { Certification } from "./certification.type";

export const findAllCertificate = async () => {
  const certificates = await prisma.certification.findMany();

  return certificates;
};

export const createCertificate = async (data: Certification) => {
  const certificate = await prisma.certification.create({ data });

  return certificate;
};
