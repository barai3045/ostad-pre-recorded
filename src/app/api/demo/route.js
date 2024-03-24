import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {

        //const reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.User.create({
            data:{
                email:"a@a2.com", 
                password:"123",
                profile: {
                    create: {
                        firstName:"q",
                        lastName:"p",
                        mobile:"r",
                        city:"s"
                    }
                },
                post: {
                    create: {
                        title: "Demo",
                        description: "Demo1"
                    }
                }
            }
        })

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}