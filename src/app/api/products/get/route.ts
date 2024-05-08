import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    try {
        const products = await prisma.product.findMany({
            include: {
                productImages: {
                    select: {
                        imageUrl:true,
                    }
                },
            }
        });
        return NextResponse.json({ success: true, products });
    } catch (error) {
        // Handle errors
        console.error('Error fetching products:', error);
        // Return an error response
        return NextResponse.json({ success: false, error: 'Internal Server Error' });
    }
}
