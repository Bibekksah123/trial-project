const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer",
    },
    dayOfWeek: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    capacity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
