# 704 Aggregation
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

## aggregation avg, max, min, sum, count

`const prisma = new PrismaClient();
const result = await prisma.employee.aggregate({
    _count:{id:true},
    _sum:{salary:true},
    _avg:{salary:true},
    _max:{salary:true},
    _min:{salary:true}
});
`

## group by using having 

` const prisma = new PrismaClient();
       const result = await prisma.employee.groupBy({
            by: ['city'],
            _count:{id:true},
            _sum:{salary:true},
            having:{city:"A"}
       });
`
