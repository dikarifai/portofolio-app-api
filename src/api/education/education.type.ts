import { Request } from "express";

export interface Education {
  id: number;
  name: string;
  institution: string;
  description?: string | null;
  start?: Date | null;
  end?: Date | null;
  urlInstitution?: string | null;
  createdAt: Date;
  updateAt?: Date | null;
}

export interface EducationRequest extends Request {
  body: Education;
}
