const Joi = require("joi");

const leadSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  interest: Joi.string()
    .valid("weight loss", "muscle gain", "general fitness")
    .required(),
  source: Joi.string()
    .valid("website", "instagram", "referral", "walk-in")
    .required(),
  message: Joi.string().allow(""),
  status: Joi.string().valid("new", "contacted", "joined").default("new"),
});

const trainerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  specialty: Joi.string().min(3).max(100).required(),
  bio: Joi.string().max(500).allow(""),
  photoUrl: Joi.string().uri().required(),
});

const classSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  trainerId: Joi.string(),
  dayOfWeek: Joi.string()
    .valid(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    )
    .required(),
  startTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  endTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  capacity: Joi.number().integer().min(1).max(100).required(),
});

const membershipPlanSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  priceNPR: Joi.number().min(0).required(),
  durationDays: Joi.number().integer().min(1).required(),
  features: Joi.array().items(Joi.string().min(3)).required(),
});


module.exports = {
  leadSchema,
  trainerSchema,
  classSchema,
  membershipPlanSchema
}