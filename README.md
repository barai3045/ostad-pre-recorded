# 708 Transactions & rollback
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
       
const createUser = prisma.user.create({
    data: {email:"user1@g.com", password:"12345"}
})

const deleteComment = prisma.comment.delete({
    where:{id:2}
})

const result = await prisma.$transaction([createUser, deleteComment])

return NextResponse.json({status:"success", data:result})`
`