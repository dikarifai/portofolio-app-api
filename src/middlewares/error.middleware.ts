import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/apiError.util";
import { removeImage } from "../utils/url.util";

interface ApiErrorType extends Error {
  statusCode?: number; // Status code bersifat opsional
}

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new ApiError(400, `Path not found - ${req.originalUrl}`);
  next(error);
};

export const errorHandler = (
  error: ApiErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const file = req.file;
  const files = req.files as Express.Multer.File[];

  if (file) {
    removeImage(file?.path);
  }
  if (files) {
    files.forEach((file) => {
      removeImage(file.path);
    });
  }

  let resStatusCode = error.statusCode || 500;

  let message = error.message;

  res.status(resStatusCode).json({
    status: "Error",
    message,
    stack: error.stack,
  });
};
