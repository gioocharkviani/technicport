import { NextRequest , NextResponse} from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req:NextRequest) {
    const token = await getToken({ req });
    if(token){
        const data = await req.json();
        return NextResponse.json(data)
    }
    else {
        // If token is not present or invalid, return unauthorized response
        return new NextResponse('Not Authorized', { status: 401 });
    }
}