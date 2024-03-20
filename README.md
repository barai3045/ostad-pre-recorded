# 606 Prisma Enum Type
 - goto image of public folder
//npx prisma migrate dev

enum UserType {
  New
  Existing
}

model User {
  id    Int       @id @default(autoincrement())
  role  UserType
}
