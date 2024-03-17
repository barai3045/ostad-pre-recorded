'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {

  const router = useRouter();

  const GoTo=() => {
      router.prefetch()
  }

  return (
    <div>
      <h1 className='text-2xl'> Home </h1>
      <button onClick={GoTo}>Click</button>
    </div>
  )
}

export default Home;