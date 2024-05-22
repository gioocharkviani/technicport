import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.searchParams);
        const categoryId = searchParams.get('category');
        const brand = searchParams.get('brand');
        const search = searchParams.get('search');
        const queryPage = searchParams.get('page');
        const take = searchParams.get('take');

        
        const ITEMS_PER_PAGE = take ? parseInt(take) : 12;
        const page = queryPage ? parseInt(queryPage) : 1;
        
        // Construct filters object
        const filters: any = {};

        if (categoryId && categoryId !== 'null') filters.categoryId = parseInt(categoryId);
        if (brand && brand !== 'null') filters.brandId = brand;
        if (search && search !== 'null') {
            filters.OR = [
                { title_en: { contains: search, mode: 'insensitive' } },
                { title_ru: { contains: search, mode: 'insensitive' } },
                { title_ge: { contains: search, mode: 'insensitive' } },
                { description_en: { contains: search, mode: 'insensitive' } },
                { description_ru: { contains: search, mode: 'insensitive' } },
                { description_ge: { contains: search, mode: 'insensitive' } },
            ];
        }

        // Fetch total count of products with the same filters
        const totalCount = await prisma.product.count({
            where: Object.keys(filters).length > 0 ? filters : undefined,
        });

        // Calculate total number of pages
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

        return NextResponse.json({ success: true, totalPages });
    } catch (error) {
        // Handle errors
        console.error('Error fetching pages:', error);
        // Return an error response
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
