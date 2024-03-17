"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = () => {
    
    let currentPath=usePathname()
    return (
        <div>
            <h1 className='text-2xl'>{currentPath}</h1> <br/>
            <Link  className={currentPath==="/"? 'active-link':'pending-link'} replace href={"/"}>Home</Link> <br/>
            <Link className={currentPath==="/product"? 'active-link':'pending-link'}  
                href={{pathname:"/product", query:{name:"book", price:"200taka"}}}
                replace
                >Product</Link> <br/>
            <Link className={currentPath==="/profile"? 'active-link':'pending-link'} replace href={"/profile"}>Profile</Link> 
        </div>
    );
};

export default Menu;