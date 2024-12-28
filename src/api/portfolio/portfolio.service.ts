import { ApiError } from "../../utils/apiError.util";
import {
  createPortfolio,
  deletePortfolio,
  findAllPortofolio,
  findPortofolioById,
  updatePortfolioByid,
} from "./portfolio.repository";
import { Portfolio } from "./portfolio.type";

export const getAllPortfolio = async () => {
  const portfolios = await findAllPortofolio();

  return portfolios;
};
export const getPortfolioById = async (id: number) => {
  const portfolio = await findPortofolioById(id);
  if (!portfolio) {
    throw new ApiError(404, "Data not found");
  }

  return portfolio;
};

export const postPortfolio = async (body: Portfolio) => {
  const portfolio = await createPortfolio(body);
  console.log(portfolio);

  return portfolio;
};

export const putPortfolio = async (id: number, body: Portfolio) => {
  await getPortfolioById(id);
  const portfolio = await updatePortfolioByid(id, body);

  return portfolio;
};

export const deletePortfolioById = async (id: number) => {
  await getPortfolioById(id);
  const portfolio = await deletePortfolio(id);

  return portfolio;
};
