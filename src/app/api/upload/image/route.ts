import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const files: File[] | null = data.getAll('image') as unknown as File[];

    if (!files || files.length === 0) {
        return NextResponse.json({ success: false, message: "No files uploaded" });
    }

    const uploadedPaths: string[] = [];

    // Handle each file individually
    for (const file of files) {
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

    return NextResponse.json({ success: true, message: "Images uploaded successfully", images: uploadedPaths });
}
