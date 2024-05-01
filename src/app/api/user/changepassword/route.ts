import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/libs/db";
import bcrypt from 'bcrypt';

interface RequestBody {
    existingpassword: string;
    password: string;
}

export async function PATCH(req: NextRequest) {
    try {
        const token = await getToken({ req });
        const body: RequestBody = await req.json();

        if (!token || typeof token.id !== 'string') { // Assert type of token.id as string
            return new NextResponse('Not Authorized', { status: 401 });
        }

        const findUser = await prisma.user.findFirst({
            where: { id: token.id }
        });

        if (!findUser) {
            return new NextResponse('User not found', { status: 404 });
        }

        const comparePassword = await bcrypt.compare(body.existingpassword || '', findUser.password);

        if (!comparePassword) {
            return new NextResponse('Existing password is incorrect', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const update = await prisma.user.update({
            where: { id: token.id },
            data: {
                password: hashedPassword
            },
        });

        if (update) {
            return new NextResponse('Password changed');
        } else {
            return new NextResponse('Password update failed', { status: 500 });
        }
    } catch (error) {
        console.error("Error in PATCH:", error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
