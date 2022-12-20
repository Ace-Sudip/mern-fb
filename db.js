const mongoose = require("mongoose");

let mongoURL = "mongodb+srv://sudipace:xZnBKvo35bVSEPsd@cluster0.67pyu2z.mongodb.net/facebook"

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true})

let connection = mongoose.connection
connection.on('error', ()=>{
  console.log("Mongo Db connection failed")
})

connection.on('connected', ()=>{
  console.log("connection successful")
})

module.exports = mongoose