import React from 'react';

const Page = ({searchParams}) => {
    return (
        <div>
            <h1>Product</h1>
            <h1>{searchParams.name}</h1>
            <h1>{searchParams.price}</h1>
        </div>
    );
};

export default Page;