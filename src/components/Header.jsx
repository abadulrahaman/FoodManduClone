import { IoCartOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-white flex p-4 justify-between shadow-lg">
      <img
        onClick={() => {
          navigate('/')
        }}
        className="h-16 w-20 rounded-full ml-10 cursor-pointer"
        src="https://www.truefoodkitchen.com/wp-content/uploads/2024/09/Whats-New_Fall-Menu_628x398-600x380.jpg.webp"
        alt="Error"
      />
      <div className="flex items-center mr-10 gap-4">
        <IoCartOutline className="h-10 w-auto" />
        <h1>10</h1>
      </div>
    </div>
  )
}

export default Header;
