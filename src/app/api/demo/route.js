import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {
        // Working with date
        // lt, lte, gt, gte
        

        const prisma = new PrismaClient();

        const result= await prisma.employee.findMany({
            where: {
                birthday: {
                    lt: new Date('2015-03-15')
                }
            }
        })

        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}