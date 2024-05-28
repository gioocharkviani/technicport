import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/db";
import { getToken } from "next-auth/jwt";

export async function DELETE(req: NextRequest) {
    const data = await req.json(); // Parse the JSON body to get the id
    const token = await getToken({ req });

    if (!token || typeof token.id !== 'string') {
        return new NextResponse('Not Authorized', { status: 401 });
    }

    if (!data.id) {
        return new NextResponse('Bad Request: Missing ID', { status: 400 });
    }

    try {
        await prisma.address.delete({
            where: {
                id: data.id,
            },
        });

        return new NextResponse('Address deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Error deleting address:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
