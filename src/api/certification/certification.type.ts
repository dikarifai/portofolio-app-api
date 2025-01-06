import { Request } from "express";

export interface Certification {
  id: number; // Auto-incrementing ID
  name: string; // Required title field
  description?: string; // Optional description
  start?: Date; // Optional start date
  end?: Date; // Optional end date
  imageUrl?: string; // Optional image URL
  createdAt: Date; // Automatically set creation timestamp
  updateAt?: Date; // Optional updated timestamp
}

export interface CertificationRequest extends Request {
  body: Certification;
}
