import { connect } from "@/lib/dbConnection";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import { error } from "three";
import bcryptjs from 'bcryptjs'
connect()

export async function POST(request) {
    try{
        const body=await request.json()
        const {userName,email,password}=body
        console.log(body);
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }
        const salt= await bcryptjs.genSaltSync(10);
        const hashedPassword = await bcryptjs.hash(password,salt)
        const newUser=new User({
            userName,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save()
        const hashedToken=await bcryptjs.hash(savedUser._id,10);
        await User.findByIdAndUpdate(savedUser._id,{varifyToken:hashedToken,verifyTokenExpiry:Date.now()+360000})
        return NextResponse.json({massage:"User registed successfully",success:ture ,})

    }catch(err){
        return NextResponse.json({error:err.message})
    }
}