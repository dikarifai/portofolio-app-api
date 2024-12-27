import { Request } from "express";

export interface Portfolio {
  id?: number;
  name: string; // Name of the portfolio, required
  description: string; // Description, stored as text
  techs: string[]; // Array of strings representing technologies
  imageUrl?: string; // Optional image URL
  url?: string; // Optional URL
  createdAt?: Date; // Automatically set to the current timestamp
  updateAt?: Date; // Optional update timestamp
}

export interface RequestPortfolio extends Request {
  body: Portfolio;
}
