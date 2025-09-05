const mongoose = require("mongoose")

const trainerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      trim: true,
      required: true,
    },
    bio: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Trainer = mongoose.model("Trainer", trainerSchema);
module.exports = Trainer;