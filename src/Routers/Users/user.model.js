const {Schema, model} = require("mongoose");

const User = new Schema({
    name:{
        type:String,
        require:true
    },
    level:{
        type:String,
        require:true
    },
    score:{
        type:Number,
        default:0
    }
})

const UserModel = model("user", User );

module.exports= UserModel;