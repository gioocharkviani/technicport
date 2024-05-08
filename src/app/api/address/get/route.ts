import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    // Get token from the request
    const token = await getToken({ req });

    // Check if token exists and is valid
    if (!token || typeof token.id !== 'string') {
        // Return early if not authorized
        return new NextResponse('Not Authorized', { status: 401 });
    }

    try {
        // Fetch user's addresses from the database
        const userAddresses = await prisma.address.findMany({
            where: {
                userId: token.id
            }
        });

        // Check if user addresses exist
        if (userAddresses && userAddresses.length > 0) {
            // Return user addresses if found
            return NextResponse.json(userAddresses);
        } else {
            // Return early if no addresses found
            return new NextResponse('No addresses found for the user', { status: 404 });
        }
    } catch (error) {
        // Handle database or other errors
        console.error('Error fetching user addresses:', error);
        // Return appropriate error response
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
