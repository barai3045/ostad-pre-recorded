import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

        const prisma = new PrismaClient();
       
        const createUser = prisma.user.create({
            data: {email:"user6@g.com", password:"12345"}
        })

        const deleteComment = prisma.comment.delete({
            where:{id:2}
        })
       
        const result = await prisma.$transaction([createUser, deleteComment])
        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}