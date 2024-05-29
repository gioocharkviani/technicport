import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    try {
        const getLocale = req.cookies.get('LOCALE');
        const locale = getLocale ? getLocale.value : 'ka'; // Default to 'en' if not set

        const res = await prisma.category.findMany({
            select: {
                id: true,
                title_ge: true,
                title_en: true,
                title_ru: true,
            }
        });

        const localizedCategories = res.map(category => {
            const title =
                (locale === 'ka' && category.title_ge) ||
                (locale === 'ru' && category.title_ru) ||
                (locale === 'en' && category.title_en) ||
                category.title_en || category.title_ge || category.title_ru;

            return {
                id: category.id,
                title: title,
            };
        });

        return NextResponse.json(localizedCategories);
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
