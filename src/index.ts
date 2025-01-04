import express, { Request, Response } from "express";
import portfolioController from "./api/portfolio/portfolio.controller";
import experienceController from "./api/experience/experience.controller";
import educationController from "./api/education/education.controller";
import skillController from "./api/skill/skill.controller";
import summaryController from "./api/summary/summary.controller";
import certificationController from "./api/certification/certification.controller";
import { errorHandler, notFound } from "./middlewares/error.middleware";

const app = express();
const PORT = 2000;

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/portfolios", portfolioController);

app.use("/experiences", experienceController);

app.use("/educations", educationController);

app.use("/skills", skillController);

app.use("/summaries", summaryController);

app.use("/certifications", certificationController);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
