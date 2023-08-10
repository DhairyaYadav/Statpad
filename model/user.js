const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:{
        type: String
    },
    Age:{
        type: Number
    },
    Gender:{
        type: String
    },
    Feedback:{
        type: String
    }
})

const User = new mongoose.model('Userfeedback',userSchema); 
module.exports = User;