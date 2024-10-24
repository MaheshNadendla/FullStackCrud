const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    fname : {
        type : String,
        required : true,
    },

    lname : {
        type : String,
        required : true,

    },
    email : {
        type : String,
        required : true,
    },

    password : {
        type : String,
        required : true,

    }
})

const User = mongoose.model("users",UserModel);
module.exports = User;