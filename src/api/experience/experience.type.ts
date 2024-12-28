import { Request } from "express";

export interface Experience {
  id: number; // Auto-incrementing identifier
  job: string; // Job title
  company: string; // Company name
  description?: string; // Optional description, longer text
  start?: Date; // Optional start date
  end?: Date; // Optional end date
  urlCompany?: string; // Optional company URL
  createdAt: Date; // Default to current timestamp
  updateAt?: Date; // Optional last update timestamp
}

export interface ExperienceRequest extends Request {
  body: Experience;
}
