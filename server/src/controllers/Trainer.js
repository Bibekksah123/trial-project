const Trainer = require("../models/Trainer");
const { trainerSchema } = require("../utils/ValidationError");

exports.createTrainer = async (req, res) => {
  const { error, value } = trainerSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details });

  const trainer = await Trainer.create(value);
  res.status(201).json(trainer);
};

exports.getTrainers = async (req, res) => {
  const trainers = await Trainer.find();
  res.json(trainers);
};
