import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const {email , password , firstName , lastName , phone} = await req.json();

    //CREATE NEW USER
    const newUser = await prisma.user.create({
        data : {
            email,
            password : await bcrypt.hash(password , 10),
            firstName,
            lastName,
            phone
        }
    }
  )

    return (
        NextResponse.json({
            newUser
        })
    )
  } 

  catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred during registration.",
    }, { status: 500 }); // Internal Server Error status code for unexpected errors
  }

}


export async function GET(req: NextRequest) {
const findUser = await prisma.user.findFirst({
  where: {
    email: 'gioocharkviani@gmail.com'
  },
  include: {
    orders:true,
    payment:true,
    shippingAddress: true,
  }
});
return NextResponse.json({
  findUser
})
}
