const cors=require("cors")
const express = require("express")
const cookiePaser=require("cookie-parser")
const dotenv = require("dotenv").config();
const connectTodb = require("./config/db");
const publicRoutes = require("./routes/public");
const privateRoutes = require("./routes/private");

const app = express()

connectTodb()

app.use(
  cors({
    origin:process.env.websiteURl,
    methods: ["GET", "POST", "PUTCH"],
    credentials: true,
  })
);
app.use(cookiePaser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", publicRoutes)
app.use("/api/auth",privateRoutes)

app.listen(7002,() => {
  console.log(`server is running on the port ${7002}`)
})