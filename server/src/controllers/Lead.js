const Lead = require("../models/Lead");
const { leadSchema } = require("../utils/ValidationError");

exports.createLead = async (req, res) => {
  const { error, value } = leadSchema
  .validate(req.body);
  if (error) return res.status(400).json({ error: error.details });

  try {
    const newLead = await Lead.create(value);
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ error: "Failed to create lead" });
  }
};

exports.getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

exports.updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["new", "contacted", "joined"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  try {
    const updated = await Lead.findByIdAndUpdate(id, { status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};
