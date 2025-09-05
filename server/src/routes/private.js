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

privateRoutes.get("/leads",isAuthenticated, getLeads);
privateRoutes.patch("/leads/:id",isAuthenticated, updateLeadStatus);

privateRoutes.post("/classes/:id",isAuthenticated, updateClass)
privateRoutes.post("/classess/create",isAuthenticated, createClass)
privateRoutes.post("/clases/delete/:id",isAuthenticated, deleteClass)
privateRoutes.get("/classes", getClasses)

privateRoutes.post("/create/trainer",isAuthenticated, createTrainer)

privateRoutes.post("/plans",isAuthenticated,createPlan)

module.exports=privateRoutes




