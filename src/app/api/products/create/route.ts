import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    const data = await req.json();
    try {
        const res = await prisma.product.create({
            data: data,
        });
        if(res){
            return NextResponse.json({ success: true, res});
        }
    } catch (error) {
        // Handle errors
        console.error('Error creating product:', error);
        // Return an error response
        return NextResponse.json({ success: false, error: 'Internal Server Error' });
    }
}
