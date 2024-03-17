'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {

  const router = useRouter();

  const GoTo=() => {
      router.push("/product?name=Mobile&price=6000");
      //router.replace("/profile");
      //router.refresh();
      //router.back();
      //router.forward();
  }

  return (
    <div>
      <h1 className='text-2xl'> Home </h1>
      <button onClick={GoTo}>Click</button>
    </div>
  )
}

export default Home;