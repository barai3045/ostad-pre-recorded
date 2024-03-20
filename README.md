# 607 Prisma DateTime Type
 - goto image of public folder
//npx prisma migrate dev

model User {

  id Int @id @default(autoincrement()) // Primary key  , Integer length 11  & Auto Increment Equivalent Column
  col1 DateTime @db.Date // Date Equivalent Column
  col2 DateTime @db.DateTime  // DateTime Equivalent Column
  col3 DateTime @db.Timestamp // 	Timestamp  Equivalent Column Default current_timestamp() 	
  col4 DateTime @db.Time // Time Equivalent Column
  col6 DateTime  // DateTime Length 3 Equivalent Column

}
