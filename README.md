# 710 Logical operator
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