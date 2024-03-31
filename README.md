# 711 Working with dates
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