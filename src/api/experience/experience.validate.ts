import Joi from "joi";

export const postExperienceSchema = Joi.object({
  job: Joi.string().required(),
  company: Joi.string().required(),
  description: Joi.string().allow(null).optional(),
  start: Joi.date().iso().allow(null).optional(),
  end: Joi.date().iso().allow(null).optional(),
  urlCompany: Joi.string().uri().allow(null).optional(),
});

export const patchExperienceSchema = Joi.object({
  job: Joi.string().optional(),
  company: Joi.string().optional(),
  description: Joi.string().allow(null).optional(),
  start: Joi.date().iso().allow(null).optional(),
  end: Joi.date().iso().allow(null).optional(),
  urlCompany: Joi.string().uri().allow(null).optional(),
}).min(1);
