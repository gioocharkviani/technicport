import { NextRequest , NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(req:NextRequest){
    try {
        const res = await prisma.brand.findMany({})
            return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({ success: false })
    }
}