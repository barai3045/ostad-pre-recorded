import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

       const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});
       
       const starttime = Date.now()
       
       const result = await prisma.employee.findMany();
    const executeTime = Date.now()-starttime + " millisecond"
        
        return NextResponse.json({exeTime:executeTime ,status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}