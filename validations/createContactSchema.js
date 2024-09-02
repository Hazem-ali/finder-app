import Joi from "joi";

export const createContactSchema = Joi.object({
  image: Joi.any().required().messages({
    "any.required": `Image is required`,
  }),
  name: Joi.string().required().min(2).messages({
    "any.required": `Name is required`,
    "string.empty": `Cannot be empty`,
  }),
  national_id: Joi.string().required().messages({
    "any.required": `National ID is required`,
  }),
  gender: Joi.string().required().messages({
    "any.required": "Please select your gender.",
    "string.empty": "Please select your gender.",
  }),
  dob: Joi.date().required().messages({
    "any.required": "Date of Birth is required.",
    "date.base": "Please enter a valid date of birth.",
  }),
  
  // father: Joi.string().required().messages({
  //   "any.required": `Father National ID is required`,
  // }),
  // mother: Joi.string().required().messages({
  //   "any.required": `Mother National ID is required`,
  // }),
});
