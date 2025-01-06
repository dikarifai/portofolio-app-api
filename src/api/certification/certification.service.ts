import {
  createCertificate,
  findAllCertificate,
} from "./certification.repository";
import { Certification } from "./certification.type";

export const getAllCertificate = async () => {
  const certifates = await findAllCertificate();

  return certifates;
};

export const postCertificate = async (body: Certification) => {
  const certificate = await createCertificate(body);

  return certificate;
};
