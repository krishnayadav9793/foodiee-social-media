
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required :[true,"Please provide username"],
        unique:[true,"User name already exsits"]
    },
    email:{
        type:String,
        required :[true,"Please provide an email"],
        unique: true
    },
    password:{
        type:String,
        required :[true,"Please enter password"]
    },
    isVerified :{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User;