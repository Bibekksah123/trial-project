const mongoose =require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, match: /^[0-9]{10}$/ },
    interest: {
      type: String,
      enum: ["Yoga", "Zumba", "Weightlifting"],
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
 
module.exports=Contact
