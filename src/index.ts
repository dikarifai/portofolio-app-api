import express, { Request, Response } from "express";
import portofolioController from "./api/portfolio/portfolio.controller";
import { errorHandler, notFound } from "./middlewares/error.middleware";

const app = express();
const PORT = 2000;

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/portfolio", portofolioController);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
