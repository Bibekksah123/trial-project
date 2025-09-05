const express = require("express")
const { loginAdmin, signupAdmin } = require("../controllers/Admin")
const { getLeads, updateLeadStatus } = require("../controllers/Lead")
const { updateClass, deleteClass, getClasses, createClass } = require("../controllers/Class")
const { createTrainer } = require("../controllers/Trainer")
const { createPlan } = require("../controllers/MemberPlan")
const isAuthenticated = require("../middleware.js/Admin")


const privateRoutes = express.Router()

privateRoutes.post("/login",loginAdmin)
privateRoutes.post("/singup", signupAdmin)

privateRoutes.get("/leads", getLeads);
privateRoutes.patch("/leads/:id", updateLeadStatus);

privateRoutes.post("/classes/:id", updateClass)
privateRoutes.post("/classess/create", createClass)
privateRoutes.post("/clases/delete/:id", deleteClass)
privateRoutes.get("/classes", getClasses)

privateRoutes.post("/create/trainer", createTrainer)

privateRoutes.post("/plans",createPlan)

module.exports=privateRoutes




