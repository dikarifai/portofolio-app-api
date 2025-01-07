import Joi from "joi";

export const postEducationSchema = Joi.object({
  name: Joi.string().required(),
  institution: Joi.string().required(),
  description: Joi.string().allow(null).optional(),
  start: Joi.date().iso().allow(null).optional(),
  end: Joi.date().iso().allow(null).optional(),
  urlInstitution: Joi.string().uri().allow(null).optional(),
});

export const patchEducationSchema = Joi.object({
  name: Joi.string().optional(),
  institution: Joi.string().optional(),
  description: Joi.string().allow(null).optional(),
  start: Joi.date().iso().allow(null).optional(),
  end: Joi.date().iso().allow(null).optional(),
  urlInstitution: Joi.string().uri().allow(null).optional(),
}).min(1);
