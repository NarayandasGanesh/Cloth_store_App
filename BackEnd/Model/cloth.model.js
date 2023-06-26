const mongoose = require("mongoose")

// Schema

const clothSchema = new mongoose.Schema({
    title:String,
    price:Number,
    brand:String
})

//Model

module.exports= mongoose.model("cloth", clothSchema)

// module.exports = {UserModel}