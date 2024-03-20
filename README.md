# 605 Prisma String type 
 - goto image of public folder

 //npx prisma migrate dev

model User {
  id Int @id @default(autoincrement()) // Primary key  , Integer length 11  & Auto Increment Equivalent Column

  col1 String // Varchar Length 191 Equivalent Column

  col2 String? //Nullable Varchar Length 191 Equivalent Column

  col3 String @default("Bangladesh") //Default value Bangladesh Varchar Length 191 Equivalent Column 

  col4 String @db.VarChar(1000) // Varchar Length 1000 Equivalent Column

  col6 String @db.TinyText // TinyText Equivalent Column

  col7 String @db.Text // Text Equivalent Column

  col8 String @db.LongText // Long Text Equivalent Column

  col9 String @db.MediumText // Medium Text Equivalent Column    
  
}