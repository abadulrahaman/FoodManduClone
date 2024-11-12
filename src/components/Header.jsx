import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-white flex p-4 justify-between shadow-lg">
            <Link to='/'>
                <img 
                    className="h-16 w-20 rounded-full ml-10" 
                    src="https://www.truefoodkitchen.com/wp-content/uploads/2024/09/Whats-New_Fall-Menu_628x398-600x380.jpg.webp" alt="Error" 
                />
            </Link>
            <div className="flex items-center mr-10 gap-4">
                <h1>10</h1>
            </div>
        </div>
    );
};

export default Header;