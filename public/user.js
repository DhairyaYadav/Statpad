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

const User = mongoose.model('User',userSchema); 

module.exports = user;