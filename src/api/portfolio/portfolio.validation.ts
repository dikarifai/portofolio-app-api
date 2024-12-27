import Joi from "joi";

export const createPortfolioScema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  techs: Joi.array().items(Joi.string().required()),
  imageUrl: Joi.string().optional(),
  url: Joi.string().optional(),
});

export const patchPortfolioScema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  techs: Joi.array().items(Joi.string().optional()),
  imageUrl: Joi.string().optional(),
  url: Joi.string().optional(),
});
