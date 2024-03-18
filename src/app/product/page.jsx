"use client"

import {useEffect, useState} from "react";

const Page = () => {
    const [user, setUser] = useState([]);

    useEffect(()=>{
        ( async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUser(data)
        })()
    }, [])

    return (
        <div>
            <h1 className="text-2xl text-blue-400">Product Page</h1>
            <p>{JSON.stringify(user)}</p>
        </div>
    );
};

export default Page;