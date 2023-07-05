import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connect } from "@/dbConfig/dbConfig";
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
        return NextResponse.json({
            message:"successfully login",
            user
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
   
}