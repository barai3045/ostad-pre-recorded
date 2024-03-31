import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {
        // AND
        // OR
        // NOT

        const prisma = new PrismaClient();

        const result= await prisma.employee.findMany({
            where: {
                AND: [
                    {name:{contains: "Employee 2"}},
                    {salary:{gt:100}}
                ]
            }
        })

        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}