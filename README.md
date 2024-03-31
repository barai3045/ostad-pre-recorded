# 707 Executing raw queries
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

`const prisma = new PrismaClient();
       
const result = await prisma.$queryRaw`SELECT * FROM employee`
       
return NextResponse.json({status:"success", data:result})`
        `