import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

       const prisma = new PrismaClient();
       const result = await prisma.employee.groupBy({
            by: ['city'],
            _count:{id:true},
            _sum:{salary:true},
            having:{city:"A"}
       });

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}