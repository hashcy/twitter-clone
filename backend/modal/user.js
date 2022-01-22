const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "name":{
        required:true,
        type:String,
    },
    "DOB":{
        type:Date
    },
    "username":{
        required:true,
        unique:true,
        type:String,
        minlength:5,
        maxlength:20
    },
    "aboutMe":{
        type:String,
        maxlength:200
    },
    "email":{
        type:String,
        required:true,
        unique:true,
    },
    "joinedOn":{
        type:Date,
        required:true
    },
    "followers":{
        type:Object
    },
    "following":{
        type:Object
    },
    "likes":{
        type:mongoose.SchemaTypes.ObjectId
    },
    "share":{
        type:mongoose.SchemaTypes.ObjectId
    },
    "displayPicture":{
        data:Buffer,
        contentType:String
    },
    "backgroundPicture":{
        data:Buffer,
        contentType:String
    }
},
{timestamps:true});

const userModal =  mongoose.model("user",userSchema);

module.exports = {userModal}
