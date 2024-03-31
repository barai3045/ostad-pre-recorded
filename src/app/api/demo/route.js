import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {
        // equals , not
        // in, notIn
        // lt, lte, gt, gte
        // contains, startsWith, endsWith

        const prisma = new PrismaClient();
       
        const result = await prisma.employee.findMany({
            //where: { salary: {equals:2300}}
            //where: { salary: {in :[2300, 1200]}}
            //where: { name: {contains:"Employee"}}
            where: { name: {startsWith:"E"}}
        });

        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}