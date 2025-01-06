import Joi from "joi";

export const certificationCreateSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  start: Joi.date().optional(),
  end: Joi.date().optional(),
  imageUrl: Joi.string().uri().optional(),
  createdAt: Joi.date().default(() => new Date()),
  updateAt: Joi.date().optional(),
});
