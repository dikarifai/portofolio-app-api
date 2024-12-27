export const getFullFileUrl = (filePath: string): string => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  return `${baseUrl}/${filePath}`;
};
