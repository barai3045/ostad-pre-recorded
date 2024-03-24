import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

       const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
        select: {id:true, 
       
            profile:{select:{firstName:true, lastName:true}},
            post:true,
            coment:true}
        
        
       });

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}