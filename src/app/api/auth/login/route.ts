import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const {email , password} = await req.json();
    //CHECK USER IN DATABASE
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });

    if(!user){
        return NextResponse.json({
            error: "Invalid Credentials !",
        }, { status: 500 }); 
    }

    const comparePassword = await bcrypt.compare(password || '' , user.password)
    
    if(!comparePassword){
        return NextResponse.json({
            error: "Invalid Credentials !",
        }, { status: 500 }); 
    }
    
    const { password: string , ...newUserData} = user;

    return NextResponse.json(newUserData)
    
  }
 // Internal Server Error status code for unexpected errors
  catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred during sign-in.",
    }, { status: 500 }); 
  }

}
