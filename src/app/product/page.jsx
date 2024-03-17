"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const params=useSearchParams();

    return (
        <div>
          
            <h1 className='text-2xl'>Product Page</h1>
            <h1>{params.get('name')}</h1>
            <h1>{params.get('price')}</h1>
        </div>
    );
};

export default Page;