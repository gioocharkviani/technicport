import prisma from "@/libs/db";
import { NextRequest , NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export  async function GET(req:NextRequest){
    const token = await getToken({req})

    // Check if token exists and is valid
    if (!token || typeof token.id !== 'string') {
         // Return early if not authorized
        return new NextResponse('Not Authorized', { status: 401 });
    }   

    try {
        const getCartProducts = await prisma.cartItem.findMany({
            where: {userId: token.id},
            select : {
                productId:false,
                quantity:true,
                checked:true,
                product:{
                    select: {
                        id:true,
                        price:true,
                        title_ge:true,
                        title_en:true,
                        title_ru:true,
                        thumbnail:true,
                        quantity:true,
                    }
                },
            },
            orderBy: {
                createdAt:'desc'
            }
        })
        return NextResponse.json(getCartProducts)
    } catch (error) {
        console.error(error);
        return NextResponse.json({
          error: "An error during get CartItems",
        }, { status: 500 }); 
    }

}