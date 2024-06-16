import { NextResponse , NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/libs/db";


export async function POST(req: NextRequest) {
    const token = await getToken({req});
    if (!token || typeof token.id !== 'string') { 
        return new NextResponse('Not Authorized', { status: 401 });
    }
    try {
        const { phone ,address, zip, city, userId } = await req.json() ;
        const createdAddress = await prisma.address.create({
            data: {
                phone: phone,
                address: address,
                zip: zip,
                city: city,
                userId: token.id
            }
        });
        if(createdAddress){
            return  NextResponse.json({sucsess:true }, {status:200});
        }
        // Handling the case where createdAddress is null or undefined
        return new NextResponse('Failed to create address', { status: 500 });
    } catch (error) {
        // Handle error appropriately, like returning an error response
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
