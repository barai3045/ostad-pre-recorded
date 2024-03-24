# 701 prisma query
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




model User {

  id Int @id @default(autoincrement()) 

  email String @unique

  pasword String

  profile Profile?

  post Post[]

  comment Comment[]

}

model Profile {

  id Int @id @default(autoincrement()) 

  firstName String

  lastName String

  mobile String

  city String

  userID Int @unique

  User User @relation(fields: [userID],references: [id],onDelete: Restrict,onUpdate:Cascade)

}


model Post {

  id  Int  @id @default(autoincrement())

  title String

  description String @db.LongText

  userID Int

  User User @relation(fields: [userID],references: [id],onDelete: Restrict,onUpdate:Cascade)

  comment Comment[]

}

model Comment {
  id    Int    @id @default(autoincrement())

  text String

  userID Int

  User User @relation(fields: [userID],references: [id],onDelete: Restrict,onUpdate:Cascade)

  postID Int

  post Post @relation(fields: [postID],references: [id],onDelete: Restrict,onUpdate:Cascade)

}

## we need prisma client for database opetations

prisma clinet object need to any type of prisma query operation


const reqBody = await req.json();

        const prisma = new PrismaClient();


        let result = await prisma.Employee.create({

            data: reqBody

        })

// other way

const reqBody = await req.json();
      
      const prisma = new PrismaClient();

        let result = await prisma.Employee.create({
            data: {
                name: reqBody['name'],
                designation: reqBody['designation'],
                city: reqBody['city'],
                salary: reqBody['salary']
            }
        })



// insert many 

//const reqBody = await req.json();
        const prisma = new PrismaClient();

        let result = await prisma.Employee.createMany({
            data: [
                {name:"1", designation: "0", city: "3", salary:1110},
                {name:"2", designation: "01", city: "34", salary:111},
                {name:"3", designation: "02", city: "35", salary:222},
                {name:"5", designation: "03", city: "36", salary:333},
            ]
        })


//insertion with relational data

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
