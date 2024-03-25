# 705 Pagination
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

## pagination cursor-take
` const prisma = new PrismaClient();
       const result = await prisma.employee.findMany({
           cursor:{id:3},
           take:3
       });`

## pagination skip-take
       `const prisma = new PrismaClient();
       const result = await prisma.employee.findMany({
           skip:3,
           take:3
       });