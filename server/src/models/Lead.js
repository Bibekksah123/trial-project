const mongoose = require("mongoose")

const leadSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    interest: {
      type: String,
    },
    source: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "joined"], 
      required: true,
    },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
module.exports = Lead;