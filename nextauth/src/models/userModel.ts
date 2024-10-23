import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide the username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please Provide the email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Provide the password"],
     
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
    verifyToken:String,
    verfiyTokenExpiry:Date
})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User