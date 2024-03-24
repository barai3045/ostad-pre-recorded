import { NextResponse } from "next/server";



export async function POST(req, res){
    try {
        const reqBody = await req.json();
        return NextResponse.json({status:"success", data:reqBody})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}