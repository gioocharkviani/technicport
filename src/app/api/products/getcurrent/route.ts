import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    try {
        const getLocale:any =  req.cookies.get('LOCALE');
        const locale = getLocale.value;
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.searchParams);
        const productId  = searchParams.get('id');

        if (!productId) {
            return new NextResponse('Product ID is missing', { status: 400 });
        }

        const res = await prisma.product.findFirst({
            where: {
                id: productId
            },
            select: {
                oem:false,
                title_ge: true,
                title_en: true,
                title_ru: true,
                description_ge: true,
                description_en: true,
                description_ru: true,
                code:true,
                price:true,
                quantity:true,
                thumbnail:true,
                id:true,
                productImages: {
                    select:{
                        id:false,
                        imageUrl:true,
                        productId:false,
                    }
                },
                category:{
                    select: {
                        id:true,
                        title_ge: true,
                        title_en: true,
                        title_ru: true,
                    }
                },

            }
        });
        
        let cat = 
            (locale === 'ka' && res?.category.title_ge !== null) ? res?.category.title_ge :
            (locale === 'ru' && res?.category.title_ru !== null) ? res?.category.title_ru :
            (locale === 'en' && res?.category.title_en !== null) ? res?.category.title_en :
            res?.category.title_ge || res?.category.title_ru;

        let title = 
            (locale === 'ka' && res?.title_ge !== '') ? res?.title_ge :
            (locale === 'ru' && res?.title_ru !== '') ? res?.title_ru :
            (locale === 'en' && res?.title_en !== '') ? res?.title_en :
            res?.title_ge || res?.title_ru || res?.title_en;

            let description = 
                (locale === 'ka' && res?.description_ge !== '') ? res?.description_ge :
                (locale === 'ru' && res?.description_ru !== '') ? res?.description_ru :
                (locale === 'en' && res?.description_en !== '') ? res?.description_en :
                res?.description_ge || res?.description_ru;

        const returnData = {
            descr: description,
            title: title,
            category: cat ,
            categoryId: res?.category.id,
            price:res?.price,
            code:res?.code,
            id:res?.id,
            tumbnail:res?.thumbnail,
            quantity: res?.quantity,
            images: res?.productImages,
        }

        if (!res) {
            return new NextResponse('Product not found', { status: 404 });
        }

        return NextResponse.json(returnData);
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}