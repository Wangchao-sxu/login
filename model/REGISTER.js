const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    username:String,  
    name:String,
    password:String,
    checkPass:String
})

const registerModel = mongoose.model('myapp',registerSchema)
module.exports = registerModel