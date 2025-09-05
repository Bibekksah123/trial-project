const mongoose = require("mongoose")

const memberPlansSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    priceNPR: {
      type: Number,
      trim: true,
      required: true,
    },
    durationDays: {
      type: String,
    },
    features: [String]
  },
  { timestamps: true }
);

const MembershipPlan = mongoose.model("MembershipPlan", memberPlansSchema);
module.exports = MembershipPlan;