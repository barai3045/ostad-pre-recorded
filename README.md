# 610 Prisma One to One relation
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

}