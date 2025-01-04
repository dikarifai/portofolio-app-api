import { findAllCertificate } from "./certification.repository";

export const getAllCertificate = async () => {
  const certifates = await findAllCertificate();

  return certifates;
};
