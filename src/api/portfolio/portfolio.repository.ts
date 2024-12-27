import prisma from "../../db";
import { ApiError } from "../../utils/apiError.util";
import { Portfolio } from "./portfolio.type";

export const findAllPortofolio = async () => {
  const portfolio = await prisma.portfolio.findMany();

  return portfolio;
};
export const findPortofolioById = async (id: number) => {
  const portfolio = await prisma.portfolio.findUnique({
    where: { id: id },
  });

  return portfolio;
};

export const createPortfolio = async (data: Portfolio) => {
  const portfolio = await prisma.portfolio.create({ data: data });

  return portfolio;
};

export const updatePortfolioByid = async (id: number, data: Portfolio) => {
  const portfolio = await prisma.portfolio.update({
    where: { id: id },
    data: data,
  });

  return portfolio;
};

export const deletePortfolio = async (id: number) => {
  const portfolio = await prisma.portfolio.delete({ where: { id: id } });

  return portfolio;
};
