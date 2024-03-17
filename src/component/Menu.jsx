
import Link from 'next/link';

const Menu = () => {
    
    
    return (
        <div>
        <ul>
            <li>
                <Link href={"/"}>Home</Link>
                
            </li>
            <li>
                <Link href={"/product"}>Product</Link>
                
            </li>
            <li>
                <Link href={"/profile"}>Profile</Link>
            </li>
        </ul>
           
        </div>
    );
};

export default Menu;