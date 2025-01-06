import express, { NextFunction, Request, Response } from "express";
import { getAllCertificate, postCertificate } from "./certification.service";
import { CertificationRequest } from "./certification.type";
import upload from "../../middlewares/upload.middleware";
import { validateRequest } from "../../middlewares/validate.middleware";
import { certificationCreateSchema } from "./certification.validate";

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

export default router;
