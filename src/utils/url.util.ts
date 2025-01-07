import fs from "fs";

export const getFullFileUrl = (filePath: string): string => {
  const baseUrl = process.env.BASE_URL;
  return `${baseUrl}/${filePath}`;
};

export const removeFullFileUrl = (filePath: string): string => {
  const baseUrl = process.env.BASE_URL;
  const path = filePath.replace(`${String(baseUrl)}/`, "");
  return path;
};

export const removeImage = (imageUrl: string | null) => {
  const urlDelete = imageUrl && removeFullFileUrl(imageUrl);

  if (urlDelete) {
    fs.unlink(urlDelete, (err) => {
      if (err) console.error("Gagal menghapus file:", err);
    });
  }
};
