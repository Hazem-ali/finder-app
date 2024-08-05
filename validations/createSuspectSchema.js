import Joi from "joi";

export const createSuspectSchema = Joi.object({
  image: Joi.any().required().messages({
    "any.required": `Image is required`,
  }),
  name: Joi.string().required().min(2).messages({
    "any.required": `Name is required`,
    "string.empty": `Cannot be empty`,
  }),
  national_id: Joi.string().when('status', {
    is: 'missing',
    then: Joi.required().messages({
      "any.required": `National ID is required when status is missing`,
      "string.empty": `Cannot be empty`,
    }),
    otherwise: Joi.optional()
  }),
  time: Joi.date().required().messages({
    "any.required": `Time is required`,
  }),
  status: Joi.string().required().messages({
    "any.required": `Status is required`,
  }),
  where: Joi.string().required().messages({
    "any.required": `Please provide the last seen address`,
    "string.empty": `Cannot be empty`,
  }),
  notes: Joi.string()
});