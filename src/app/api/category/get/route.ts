import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
    try {
        const res = await prisma.category.findMany({
            select: {
                id:true,
                title_ge:true
            }
        })
            return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({ success: false })
    }
}
