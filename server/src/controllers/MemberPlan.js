const MembershipPlan = require("../models/MembershipPlan");
const { membershipPlanSchema } = require("../utils/ValidationError");

exports.createPlan = async (req, res) => {
  const { error, value } = membershipPlanSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details });

  const plan = await MembershipPlan.create(value);
  res.status(201).json(plan);
};

exports.getPlans = async (req, res) => {
  const plans = await MembershipPlan.find();
  res.json(plans);
};
