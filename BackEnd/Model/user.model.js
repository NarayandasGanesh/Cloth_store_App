const mongoose  = require("mongoose")


let userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("signinusers", userSchema)