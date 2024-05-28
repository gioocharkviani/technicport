import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/libs/db";
import { createTranslation } from "@/i18n/server";

export async function PATCH(req: NextRequest) {
    const { t } = await createTranslation('response');
    const token = await getToken({ req });

    if (!token || typeof token.id !== 'string') {
        return new NextResponse('Not Authorized', { status: 401 });
    }

    const reqData = await req.json();

    try {
        const { email, phone } = reqData;

        if (email) {
            const isExistingEmail = await prisma.user.findFirst({
                where: {
                    email,
                    NOT: {
                        id: token.id
                    }
                }
            });

            if (isExistingEmail) {
                return new NextResponse(t('error.emailExist'), { status: 400 });
            }
        }

        if (phone) {
            const isExistingPhone = await prisma.user.findFirst({
                where: {
                    phone,
                    NOT: {
                        id: token.id
                    }
                }
            });

            if (isExistingPhone) {
                return new NextResponse(t('error.phoneExist'), { status: 400 });
            }
        }

        const updateData = await prisma.user.update({
            where: { id: token.id },
            data: reqData,
        });

        return new NextResponse(JSON.stringify(updateData));
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
