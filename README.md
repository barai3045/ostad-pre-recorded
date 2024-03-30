# 706 Time Calculation and Logging
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

// we can get four types of log in prisma. For enableing  log we need to write 
// const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});


` const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});
       
       const starttime = Date.now()
       
       const result = await prisma.employee.findMany();
        const executeTime = Date.now()-starttime + " millisecond"
        `