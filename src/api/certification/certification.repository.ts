import prisma from "../../db";

export const findAllCertificate = async () => {
  const certificates = await prisma.certification.findMany();

  return certificates;
};
