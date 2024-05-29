import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    try {
        const getLocale = req.cookies.get('LOCALE');
        const locale = getLocale ? getLocale.value : 'ka'; // Default to 'en' if not set

        const res = await prisma.brand.findMany({
            select: {
                id: true,
                brand_ge: true,
                brand_en: true,
                brand_ru: true,
            }
        });

        const localizedBrand = res.map(brand => {
            const title =
                (locale === 'ka' && brand.brand_ge) ||
                (locale === 'ru' && brand.brand_ru) ||
                (locale === 'en' && brand.brand_en) ||
                brand.brand_en || brand.brand_ge || brand.brand_ru;

            return {
                id: brand.id,
                title: title,
            };
        });

        return NextResponse.json(localizedBrand);
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
