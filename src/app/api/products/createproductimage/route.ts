import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    try {
        const { imageUrl, productId } = await req.json();
        if (!imageUrl || !productId) {
            return NextResponse.json(new Error("Invalid request data"), { status: 400 });
        }

        await prisma.productImages.create({
            data: {
                imageUrl,
                productId
            }
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error("Error creating product image:", error);
        return NextResponse.json(new Error("Internal Server Error"), { status: 500 });
    }
}
