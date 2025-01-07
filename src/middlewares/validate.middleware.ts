import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/apiError.util";
import { Schema } from "joi";
import fs from "fs";
import upload from "./upload.middleware";
import { RequestPortfolio } from "../api/portfolio/portfolio.type";
import { getFullFileUrl } from "../utils/url.util";

export function validateRequest(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;
    const files = req.files as Express.Multer.File[];
    const { error } = schema.validate(req.body);
    if (file && file.path) {
      req.body.imageUrl = getFullFileUrl(file?.path);
    }
    if (files) {
      req.body.imageUrls = files.map((file) => getFullFileUrl(file.path));
    }
    if (error) {
      // Jika validasi gagal, hapus file
      if (file && file.path) {
        fs.unlink(file.path, (err) => {
          if (err) console.error("Gagal menghapus file:", err);
        });
      }
      if (files) {
        files.forEach((file) =>
          fs.unlink(file.path, (err) => {
            if (err) console.error("Gagal menghapus file:", err);
          })
        );
      }
      throw new ApiError(400, error.details[0].message);
    }
    next();
  };
}
