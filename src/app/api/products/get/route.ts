import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const search = searchParams.get('search');
    let queryPage : any = searchParams.get('page');
    const take = searchParams.get('take'); 
    
    
    
    const ITEMS_PER_PAGE = take !== null ? parseInt(take) : 12;
    let page = null;
    if(queryPage !== undefined){
        page = parseInt(queryPage);
    }else{
       page = 0;
    }
    const offset = (page -1) * ITEMS_PER_PAGE;

// Construct filters object
const filters:any = {};
if (category && category !== 'undefined') filters.categoryId = parseInt(category);
// if (brand && brand !== 'undefined') filters.brand = brand;
// if (search && search !== 'undefined') filters.name = { contains: search, mode: 'insensitive' };
    
    
    try {
        const products = await prisma.product.findMany({
            take:  ITEMS_PER_PAGE,
            skip:offset || 0,
            where:filters,
            include: {
                productImages: {
                    select: {
                        imageUrl:true,
                    }
                },
            },
            orderBy: {
                createdAt:'desc'
            }
        });



        return NextResponse.json({ success: true, products,});
    } catch (error) {
        // Handle errors
        console.error('Error fetching products:', error);
        // Return an error response
        return NextResponse.json({ success: false, error: 'Internal Server Error' } , {status: 500});
    }
}
