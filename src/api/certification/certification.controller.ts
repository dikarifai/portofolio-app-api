import express, { NextFunction, Request, Response } from "express";
import {
  deleteCertificate,
  getAllCertificate,
  postCertificate,
  putCertificateById,
} from "./certification.service";
import { CertificationRequest } from "./certification.type";
import upload from "../../middlewares/upload.middleware";
import { validateRequest } from "../../middlewares/validate.middleware";
import {
  certificationCreateSchema,
  certificationPatchSchema,
} from "./certification.validate";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const certifates = await getAllCertificate();

    res.send({
      status: "success",
      data: { certifates },
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  upload.single("image"),
  validateRequest(certificationCreateSchema),
  async (req: CertificationRequest, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      const certificate = await postCertificate(body);

      res.send({
        status: "success",
        data: certificate,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
      const certificate = await deleteCertificate(id);

      res.send({
        status: "success",
        message: "data has been deleted",
        data: certificate,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  "/:id",
  upload.single("image"),
  validateRequest(certificationPatchSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const { body } = req;
    try {
      const certificate = await putCertificateById(body, id);

      res.send({
        status: "success",
        message: "data has been updated",
        data: certificate,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.put(
  "/:id",
  upload.single("image"),
  validateRequest(certificationCreateSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const { body } = req;
    try {
      const certificate = await putCertificateById(body, id);

      res.send({
        status: "success",
        message: "data has been updated",
        data: certificate,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
