import express, { NextFunction, Request, Response } from "express";
import { getAllCertificate } from "./certification.service";
import { CertificationRequest } from "./certification.type";

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
  async (req: CertificationRequest, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);

export default router;
