
import Link from 'next/link';

const Menu = () => {
    
    
    return (
        <div>
           <Link href={"/"}>Home</Link>
           <Link href={"/product"}>Product</Link>
           <Link href={"/profile"}>Profile</Link>
        </div>
    );
};

export default Menu;