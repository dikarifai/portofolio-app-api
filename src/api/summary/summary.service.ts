import { createSummarry, findFirstSummary } from "./summary.repository";
import { Summary } from "./summary.type";

export const getFirstSummary = () => {
  const summary = findFirstSummary();

  return summary;
};

export const postSummary = async (body: Summary) => {
  const summary = await createSummarry(body);

  return summary;
};
