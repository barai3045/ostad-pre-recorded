# 703 Find relations condition nested details
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


// find 
const prisma = new PrismaClient();
const result = await prisma.Employee.findMany();


//findmany with where & select

const prisma = new PrismaClient();
const result = await prisma.Employee.findMany({
        where : { name: "A"}
});



const prisma = new PrismaClient();
const result = await prisma.Employee.findMany({
    where : { name: "A"},
    select: {id:true}
});


// find search

const prisma = new PrismaClient();
       const result = await prisma.Post.findMany({
        where : { title: {contains:"Prisma"}},
        
       });


// orderBy

 const prisma = new PrismaClient();
       const result = await prisma.Employee.findMany({
        orderBy: {
            id:"desc"
        }
        
       });

 const prisma = new PrismaClient();
       const result = await prisma.Employee.findMany({
        orderBy: {
            salary:"asc"
        }

// aseccinding with limit


const prisma = new PrismaClient();
       const result = await prisma.Employee.findMany({
        orderBy: {
            salary:"asc"
        },
        take:2
        
       });


// Find with skip & limit 

const prisma = new PrismaClient();
       const result = await prisma.Employee.findMany({
        orderBy: {
            salary:"asc"
        },
        skip:2,
        take:2
        
       });


//find first

 const prisma = new PrismaClient();
const result = await prisma.Employee.findFirst();


//findlast using findFirst 

 const prisma = new PrismaClient();
       const result = await prisma.Employee.findFirst({
            orderBy:{ id:"desc"}
       });

//find unique

const prisma = new PrismaClient();
       const result = await prisma.User.findUnique({
            where:{ id:3}
       });

// find with relation

const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
        include: { profile:true, post:true}
       });


// find with nested relations

 const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
        where:{email:"a@a1.com"},
        include: { profile:true, post:true, coment:true}
       });


const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
        where:{email:{contains:"a@a1.com"}},
        include: { profile:true, post:true, coment:true}
       });


const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
       
        include: { 
            profile:true, 
            post: {where:{title:{contains:"Prisma"}}},
            coment:true
        }
       });


const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
       
        include: { 
            profile:true, 
            post: {where:{title:{contains:"Prisma"}}},
            coment:true
        },
        orderBy:{id:"desc"}
       });


 const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
       
        include: { 
            profile:true, 
            post: {orderBy:{title:"desc"}},
            coment:true
        }
        
       });

 const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
       
        include: { 
            profile:{select:{firstName:true, lastName:true}},
            post:true,
            coment:true
        }
        
       });

const prisma = new PrismaClient();
       const result = await prisma.User.findMany({
        select: {id:true, 
       
            profile:{select:{firstName:true, lastName:true}},
            post:true,
            coment:true}
        
        
       });