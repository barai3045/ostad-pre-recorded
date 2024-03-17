"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        ( async()=>{
            const res=await  fetch('https://jsonplaceholder.typicode.com/users');
            const data1=await res.json();
            
            setData(data1);
        })()
    }, [])

    return (
        <div>
            <h1 className='text-2xl'>Profile Page</h1>
            
            <h1 className='text-2xl'>{JSON.stringify(data)}</h1>
        </div>
    );
};

export default Page;