import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";
import { getToken } from "next-auth/jwt";

export async function PUT(req: NextRequest) {
    const token = await getToken({ req });
    if (!token || typeof token.id !== 'string') {
        return new NextResponse('Not Authorized', { status: 401 });
    }

    try {
        const data = await req.json();
        const { id, city, address, phone, zip } = data;

        // Validate data (you might already have this covered with Zod in the frontend, but it's good to double-check on the backend)
        if (!id || !city || !address || !phone || !zip) {
            return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
        }

        // Update the address in the database
        const updatedAddress = await prisma.address.update({
            where: { id: id },
            data: {
                city: city,
                address: address,
                phone: phone,
                zip: zip
            }
        });

        return NextResponse.json({ message: 'Address updated successfully', address: updatedAddress }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error updating address' }, { status: 500 });
    }
}
