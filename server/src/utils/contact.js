const Joi = require("joi");

const contactValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Name is required",
  }),

  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone must be a 10-digit number",
      "string.empty": "Phone number is required",
    }),

  interest: Joi.string()
    .valid("Yoga", "Zumba", "Weightlifting")
    .required()
    .messages({
      "any.only": "Interest must be one of Yoga, Zumba, or Weightlifting",
      "string.empty": "Interest is required",
    }),
});

module.exports = contactValidationSchema;
