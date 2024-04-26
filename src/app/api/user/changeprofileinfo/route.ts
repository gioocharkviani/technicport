import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/libs/db";
import { createTranslation } from "@/i18n/server";

export async function PATCH(req: NextRequest) {
    const {t} = await createTranslation('response')
    const token = await getToken({ req });
    const reqData = await req.json();

    if (token && token.id) {
        // Check if the provided email already exists in the database
        const isExistingEmail = await prisma.user.findFirst({
            where: {
                email: reqData.email,
                NOT: {
                    id: token.id // Exclude the current user from the check
                }
            }
        });

        // Check if the provided phone already exists in the database
        const isExistingPhone = await prisma.user.findFirst({
            where: {
                phone: reqData.phone,
                NOT: {
                    id: token.id // Exclude the current user from the check
                }
            }
        });

        // If email or phone already exist, return appropriate response
        if (isExistingEmail && reqData.email) {
            return new NextResponse(t('error.emailExist'), { status: 400 });
        }
        if (isExistingPhone && reqData.phone) {
            return new NextResponse(t('error.phoneExist'), { status: 400 });
        }

        // Update the user data in the database
        const updateData = await prisma.user.update({
            where: {id: token.id},
            data: reqData,
        });

        return new NextResponse(JSON.stringify(token));
    } else {
        // If token is not present or invalid, return unauthorized response
        return new NextResponse('Not Authorized', { status: 401 });
    }
}
