const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
const Admin = require("../models/Admin");


 const signupAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await Admin.findOne({ email });
  if (existing)
    return res.status(409).json({ message: "Admin already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = await Admin.create({
    name,
    email,
    password: hashedPassword,
  });
  res
    .status(201)
    .json({
      success: true,
      admin: { name: newAdmin.name, email: newAdmin.email },
    });
};


 const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(404).json({ message: "Admin not found" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = await jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn:"5d"
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ success: true, admin: { email: admin.email } });
};

module.exports = {
  loginAdmin,
  signupAdmin
}
