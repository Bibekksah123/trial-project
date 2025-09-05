const mongoose = require("mongoose")

const connectTodb = async() => {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to db")
  }).catch(() => {
    process.exit(1)
  })
}

module.exports=connectTodb