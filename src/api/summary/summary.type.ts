import { Request } from "express";

export interface Summary {
  id: number; // ID unik, auto-increment
  title: string; // Judul
  description: string; // Deskripsi
  imageUrls: string[]; // Array URL gambar
}

export interface SummaryRequest extends Request {
  body: Summary;
}
