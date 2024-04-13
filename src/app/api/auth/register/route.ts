import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const {email , password , firstName , lastName , phone} = await req.json();

    //CHECK EMAIL
    const existingEmailUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (existingEmailUser) {
      return NextResponse.json({
        error: "Email is already in use.",
      }, { status: 409 }); 
    }

    //CHECK PHONE
    const existingPhone = await prisma.user.findFirst({
      where: {
        phone,
      },
    });
    if (existingPhone) {
      return NextResponse.json({
        error: "Phone Number is already in use.",
      }, { status: 409 }); 
    }

    //CREATE NEW USER
    const newUser = await prisma.user.create({
        data : {
            email,
            password : await bcrypt.hash(password , 10),
            firstName,
            lastName,
            phone
        }
    })

    const { password: _, ...user } = newUser;
  
    return (
        NextResponse.json({
          user
        })
    )
  } 

 // Internal Server Error status code for unexpected errors
  catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred during registration.",
    }, { status: 500 }); 
  }

}
