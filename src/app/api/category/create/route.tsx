import { NextRequest , NextResponse } from "next/server";
import prisma from "@/libs/db";
import { getToken } from "next-auth/jwt";

export async function POST(req:NextRequest) {
    const token = await getToken({req});
    if (!token ||  token.role !== 'ADMIN') { 
        return new NextResponse('Not Authorized', { status: 401 });
    }
    
    try {
        const data = await req.json();
        const res = await prisma.category.create({
            data: data
        });
        if(res){
            return NextResponse.json({ 
                "message": "Category created Succsessfully",
                success: true ,
                res,
            });
        }
    } catch (error) {
        // Handle errors
        console.error('Error creating product:', error);
        // Return an error response
        return NextResponse.json({ success: false, error: 'Internal Server Error' });
    }
}