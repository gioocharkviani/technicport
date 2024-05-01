import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/db";

export async function GET(req: NextRequest) {
    try {
        let data = null;
        const locale = req.cookies.get('LOCALE');
        console.log(locale?.value)
        const aboutInfo = await prisma.about.findMany({});
        
        if (aboutInfo.length === 0) {
            // If there is no data in the database, provide default data
            data = "technicport";
        } else {
            // Determine which language data to use based on the locale
            switch (locale?.value) {
                case 'ge':
                    data = aboutInfo[0].aboutus_ge || "technicport";
                    break;
                case 'en':
                    data = aboutInfo[0].aboutus_en || aboutInfo[0].aboutus_ge;
                    break;
                case 'ru':
                    data = aboutInfo[0].aboutus_ru || aboutInfo[0].aboutus_ge;
                    break;
                default:
                    // If locale is not specified or unsupported, use default data
                    data = aboutInfo[0].aboutus_ge;
                    break;
            }
        }

        return NextResponse.json(data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching About information:', error);
        
        // Return an error response
        return NextResponse.json({ success: false, error: 'Internal Server Error' });
    }
}
