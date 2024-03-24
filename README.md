# 702 prisma delete update
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider="mysql"
  url= env("DATABASE_URL")
}

//npx prisma migrate dev

// update data


const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')
        const reqBody = await req.json();

        const prisma = new PrismaClient();

        const result = await prisma.Employee.update({
            where:{id:2},
            data:{ name:"Jane", designation:"Manager", city:"Francisco" }
        })



// dynamically 

const {searchParams} = new URL(req.url)
        const id = parseInt(searchParams.get('id'))
        const reqBody = await req.json();

        const prisma = new PrismaClient();

        const result = await prisma.Employee.update({
            where:{id:id},
            data:reqBody
        })

