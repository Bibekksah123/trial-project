const express = require("express");
const { getPlans } = require("../controllers/MemberPlan");
const { getClasses } = require("../controllers/Class");
const { createLead } = require("../controllers/Lead");
const { createTrainer } = require("../controllers/Trainer");
const createContact = require("../controllers/contact");

const publicRoutes = express.Router()

publicRoutes.get("/plans", getPlans)

publicRoutes.post("/trainer", createTrainer)

publicRoutes.get("/classes", getClasses)

publicRoutes.post("/leads", createLead);

publicRoutes.post("/contact",createContact)



module.exports = publicRoutes;

