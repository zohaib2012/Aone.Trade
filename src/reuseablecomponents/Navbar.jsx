
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('auth token')

  const navigate = useNavigate();

 
  return (
    <nav className={ token ?("hidden"): ("flex  items-center justify-between px-6 py-4 bg-white shadow-sm ") }>
      <div className="flex items-center space-x-12">
        <div>

          <img src="public/WhatsApp Image 2025-03-28 at 05.55.05.png" alt="UK Flag" className="w-14 h-14 p-2" />
        </div>

        {/* Navigation Menu Items */}
        <div className="flex space-x-12 text-md font-semibold text-black">
          <a href="/" className="hover:text-blue-600 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-blue-600">Home</a>
          <a href="/" className="hover:text-blue-600  hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-blue-600">Trading</a>
          <a href="/contactus" className="hover:text-blue-600  hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-blue-600">Contact us</a>
        </div>
      </div>


      {/* Right Side Buttons */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <button className="text-blue-600 hover:scale-125 ">
          <Link to={"/login"}>

          </Link>
        </button>

        {/* Register and Login Buttons */}
        <div className="flex space-x-2">
          {token ? ("") : (<div>

            <button className="text-md px-4 py-2 font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Link to={"/register"}>
                Register
              </Link>
            </button>

            <button className="text-blue-600 font-semibold text-md px-4 py-2 hover:bg-blue-50 rounded-full">
              <Link to={"/login"}>
                Login
              </Link>
            </button>
          </div>
          )
          }







        </div>


      </div>
    </nav>
  );
};

export default Navbar;


