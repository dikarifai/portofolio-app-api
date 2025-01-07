import { ApiError } from "../../utils/apiError.util";
import { removeFullFileUrl, removeImage } from "../../utils/url.util";
import {
  createCertificate,
  deleteCertificateById,
  findAllCertificate,
  findCertificateById,
  updateCertificateById,
} from "./certification.repository";
import { Certification } from "./certification.type";
import fs from "fs";

export const getAllCertificate = async () => {
  const certificates = await findAllCertificate();

  return certificates;
};

export const getCertificateById = async (id: number) => {
  const certificate = await findCertificateById(id);
  if (!certificate)
    throw new ApiError(404, `Resource with ID ${id} not found.`);

  return certificate;
};

export const postCertificate = async (body: Certification) => {
  const certificate = await createCertificate(body);

  return certificate;
};

export const deleteCertificate = async (id: number) => {
  const { imageUrl } = await getCertificateById(id);
  const certificate = await deleteCertificateById(id);

  removeImage(imageUrl);

  return certificate;
};

export const putCertificateById = async (body: Certification, id: number) => {
  const { imageUrl } = await getCertificateById(id);
  const certificate = await updateCertificateById(body, id);

  removeImage(imageUrl);

  return certificate;
};
