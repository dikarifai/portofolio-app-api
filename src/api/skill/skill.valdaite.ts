import Joi from "joi";

export const postSkillScema = Joi.object({
  name: Joi.string().trim().required(),
});
