import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

       const prisma = new PrismaClient();
       const result = await prisma.employee.aggregate({
            _count:{id:true},
            _sum:{salary:true},
            _avg:{salary:true},
            _max:{salary:true},
            _min:{salary:true}
       });

      
        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}