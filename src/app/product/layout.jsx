import React from 'react';


const Layout = ({children}) => {
    return (
        <div>
        <button>Product List</button>
            {children}
        </div>
    );
};

export default Layout;