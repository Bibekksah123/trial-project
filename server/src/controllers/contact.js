const Contact = require("../models/contact");
const contactValidationSchema = require("../utils/contact");
 const createContact = async (req, res) => {
  const { error, value } = contactValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const newContact = await Contact.create(value);
    res
      .status(201)
      .json({ message: "Contact saved successfully", data: newContact });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
module.exports=createContact