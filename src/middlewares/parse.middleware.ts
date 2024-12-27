import multer from "multer";

const storage = multer.memoryStorage(); // Penyimpanan dalam memori, file tidak akan disimpan di disk
const parse = multer({ storage: storage });

export default parse;
