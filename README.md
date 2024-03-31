# 709 Comparism Operators
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