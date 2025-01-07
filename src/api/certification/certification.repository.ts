import prisma from "../../db";
import { Certification } from "./certification.type";

export const findAllCertificate = async () => {
  const certificates = await prisma.certification.findMany();

  return certificates;
};

export const findCertificateById = async (id: number) => {
  const certificate = await prisma.certification.findUnique({ where: { id } });

  return certificate;
};

export const createCertificate = async (data: Certification) => {
  const certificate = await prisma.certification.create({ data });

  return certificate;
};

export const deleteCertificateById = async (id: number) => {
  const certificate = await prisma.certification.delete({ where: { id } });

  return certificate;
};

export const updateCertificateById = async (
  data: Certification,
  id: number
) => {
  const certificate = await prisma.certification.update({
    where: { id: id },
    data: data,
  });

  return certificate;
};
