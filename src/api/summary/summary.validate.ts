import Joi from "joi";

export const postSummarySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const patchSummarySchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
}).min(1);
