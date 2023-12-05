const  mongoose  = require("mongoose")

const validator= require("validator");
const userschema= mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLenght:3
    },
    email:{
        type:String,
        require:true,
        validator(value){
           if(!validator.isEmail('value')){
            throw new Error("invalid email id")
           } //=> true
        }
    },
    phone:{
        type:Number,
        require:true,
        minLenght:10,
        maxLenght:10
    },
    Message:{
        type:String,
        require:true,
        minLenght:3
    }
})
const User=mongoose.model("User",userschema);
module.exports=User;