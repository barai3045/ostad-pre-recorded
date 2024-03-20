# 604 Prisma Number type 
 - goto image of public folder

 model User {
  
  id Int @id @default(autoincrement()) // Primary key  , Integer length 11  & Auto Increment Equivalent Column
  col1 Int @db.UnsignedInt // UNSIGNED Integer length 11  Equivalent Column


  col2  BigInt  // Big Integer length 20  Equivalent Column
  col3  BigInt @db.UnsignedBigInt  // UNSIGNED Big Integer length 20  Equivalent Column
  
  col4  Int @db.SmallInt // Small Integer length 6 Equivalent Column
  col5  Int @db.UnsignedSmallInt // UNSIGNED Small Integer length 6 Equivalent Column

  col6  Int @db.MediumInt // Medium Integer length 9 Equivalent Column
  col7  Int @db.UnsignedMediumInt  //UNSIGNED Medium Integer length 8 Equivalent Column

  col8  Int @db.TinyInt  // Tiny Integer length 4 Equivalent Column
  col9  Int @db.UnsignedTinyInt // UNSIGNED Tiny Integer length 3 Equivalent Column

  col10 Decimal  // decimal(65,30) 	Equivalent Column
  col11 Float // Double Equivalent Column
  col12 Float @db.Float // Float Equivalent Column

  col13 BigInt @default(10) //Default Value 10 Big Integer length 20  Equivalent Column

  col14 BigInt @unique  //Unique Big Integer length 20  Equivalent Column

}