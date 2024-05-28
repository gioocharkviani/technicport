import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    const { id } = await req.json();

    try {
        // Fetch the address to get the user ID
        const address = await prisma.address.findUnique({
            where: { id: parseInt(id) }
        });

        if (!address) {
            return new NextResponse('Address not found', { status: 404 });
        }

        // Set all addresses of the user to not default
        await prisma.address.updateMany({
            where: { userId: address.userId },
            data: { default: false }
        });

        // Set the selected address as default
        await prisma.address.update({
            where: { id: parseInt(id) },
            data: { default: true }
        });

        return new NextResponse('Default address updated', { status: 200 });
    } catch (error) {
        console.error('Error updating default address:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
