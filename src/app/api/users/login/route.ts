import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connect } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken"
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {email,password}=reqBody;
    
        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"user doesn't exist"},{status:400})
        }
    
        const isValidPassword=await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return NextResponse.json({error:"password is incorrect"},{status:400});
        }
        //create Token Data
        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }
        //create Token
        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})
        const response=NextResponse.json({
            message:"Login Successfully",
            success:true
        })
        response.cookies.set('token',token,{
            httpOnly:true,
        })
        return response;

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
   
}