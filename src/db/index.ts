import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.action === "update" || params.action === "updateMany") {
    if (!params.args.data) {
      params.args.data = {};
    }
    params.args.data.updateAt = new Date();
  }
  return next(params);
});

export default prisma;
