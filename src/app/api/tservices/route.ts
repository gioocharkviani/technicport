import { NextRequest , NextResponse } from "next/server";

export async function  GET({req }: {req:NextRequest }) {
    return NextResponse.json('services')
}