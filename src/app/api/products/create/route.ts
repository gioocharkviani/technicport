import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { promises as fs } from "fs";
import { join } from "path";
import { getToken } from "next-auth/jwt";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    // const token = await getToken({ req });
    // if (!token || token.role !== 'ADMIN') { 
    //     return new NextResponse('Not Authorized', { status: 401 });
    // }
    try{

        const data = await req.formData();
        const images: File[] | null = data.getAll('image') as unknown as File[];
        const uploadedPaths: string[] = [];
        
        
        // Handle each file individually
        for (const file of images) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const uploadDir = join(process.cwd(), 'public/upload/product-images');
            await fs.mkdir(uploadDir, { recursive: true });
            const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
            const newImageName = `${uniqueSuffix}-${file.name}`;
            const newImagePath = join(uploadDir, newImageName);
            await writeFile(newImagePath, buffer);
            uploadedPaths.push(`/upload/product-images/${newImageName}`);
        }
        // Handle each file individually
        
        const thumbnailIndex: any = data.get('thumbnailindex');
        const thumbnailPath = uploadedPaths[parseInt(thumbnailIndex)] ;
        
        const productData = {
            title_en: data.get('titleEn') as string,
            title_ru: data.get('titleRu') as string ,
            title_ge: data.get('titleGe') as string, 
            description_en: data.get('descrEN') as string,
            description_ru:data.get('descrRU') as string,
            description_ge:data.get('descrGE') as string,
            code: data.get('techCode') as string,
            oem: data.get('oem') as string,
            price : parseInt(data.get('price') as string), 
            quantity: parseInt(data.get('quantity')as string),
            categoryId : parseInt(data.get('categoryid')as string),
            thumbnail : thumbnailPath
        }
        
        const createdProduct = await prisma.product.create({
            data: productData
        });
        
        
        for (const imageUrl of uploadedPaths) {
            await prisma.productImages.create({
                data: {
                    imageUrl,
                    productId: createdProduct.id,
                }
            });
        }

    
    return NextResponse.json(
        {
        success: true,
        message: "Product and images uploaded successfully"
        }, { status: 200 }
    );
    }catch (error) {
        console.error("Error uploading product and images:", error);
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, { status: 500 });
    }
        
}
