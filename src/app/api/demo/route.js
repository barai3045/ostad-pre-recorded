import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

        const {searchParams} = new URL(req.url)
        const id = parseInt(searchParams.get('id'))
        //const reqBody = await req.json();

        const prisma = new PrismaClient();

        //const result = await prisma.Employee.update({
        const result = await prisma.Employee.delete({
            where:{id:id}
            //data:reqBody
        })


        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}