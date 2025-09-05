const Class = require("../models/Class");
const { classSchema } = require("../utils/ValidationError");

exports.createClass = async (req, res) => {
  const { error, value } = classSchema.validate(req.body);
  console.log(value)
  if (error) return res.status(400).json({ error: error.details });
  const newClass = await Class.create(value);
  res.status(201).json(newClass);
};

exports.getClasses = async (req, res) => {
  const classes = await Class.find().populate("trainerId", "name specialty");
  res.json(classes);
};

exports.updateClass = async (req, res) => {
  const { id } = req.params
  const updateData = req.body.updateData;
  const classes = await Class.findByIdAndUpdate(id, {
    updateData,
  });
  console.log(classes)
  res.json({message:"successfully updated class"})
}
exports.deleteClass = async (req, res) => {
  const id = req.params
  const classes = await Class.findByIdAndDelete(id)
  console.log(classes)
  res.json({message:"successfully delete class"})
}
