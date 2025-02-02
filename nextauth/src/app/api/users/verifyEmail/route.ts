import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
connectDB();


export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {token}=reqBody;
        console.log(token);

        const user=await User.findOne({verifyToken:token,verfiyTokenExpiry:{$gt:Date.now()}})
        if(!user){
            return NextResponse.json({
                error:"Invalid Token"
            },{
                status:400})
        }

        console.log(user)

        user.isVerified=true

        user.verifyToken=undefined
        user.verfiyTokenExpiry=undefined


        await user.save()

        return NextResponse.json({
            message:"Email Verified Successfully",
            success:true})


    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{
            status:500})
    }
}