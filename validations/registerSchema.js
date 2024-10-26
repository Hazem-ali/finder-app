import Joi from "joi";
export const registerSchema = Joi.object({
  first_name: Joi.string().min(2).max(30).required().messages({
    "string.empty": "First name is required.",
    "string.min": "First name must be at least 1 character long.",
    "string.max": "First name must be less than or equal to 30 characters.",
    "any.required": "First name is required.",
  }),

  last_name: Joi.string().min(1).max(30).required().messages({
    "string.empty": "Last name is required.",
    "string.min": "Last name must be at least 1 character long.",
    "string.max": "Last name must be less than or equal to 30 characters.",
    "any.required": "Last name is required.",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address.",
      "any.required": "Email is required.",
    }),

  // gender: Joi.string().required().messages({
  //   "any.required": "Please select your gender.",
  // }),

  phone: Joi.string()
    .pattern(new RegExp("^[0-9]{10,15}$"))
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be between 10 and 15 numbers.",
      "any.required": "Phone number is required.",
    }),

  password: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9]+$"))
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long.",
      "string.max": "Password must be less than or equal to 30 characters.",
      "string.pattern.base":
        "Password can only contain alphanumeric characters.",
      "any.required": "Password is required.",
    }),

  password_confirm: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match.",
    "any.required": "Password confirmation is required.",
  }),


});
