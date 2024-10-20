import React, { useContext, useState } from 'react';
import image from './image/Group 235.png';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../utils/utils';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { CardContext } from '../../context/AddToCart';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  console.log('user', user);


  const {user1} = useContext(CardContext)
                             
  console.log('user1', user1.length);

  function hendlingLogout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  }

  return (
    <>
      <div  className="sticky top-0 start-0 z-50 w-full  flex flex-wrap place-items-center">
        <section className="relative mx-auto w-full">
          {/* Navbar */}
          <nav className="flex justify-between bg-gray-100 text-black w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <img className="w-24" src={image} alt="" />

              {/* Nav Links */}
              <ul className="hidden xl:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <Link to={'/'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Home
                  </a>
                </li> 
                </Link>
                <Link to={'/admin'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Admin
                  </a>
                </li>
                </Link> 
                <Link to={'/TotalProduct'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Total Products
                  </a>
                </li>
                </Link>
                <Link to={'/TotalOrderUser'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Total Orders
                  </a>
                </li>
                </Link>
                <Link to={'/UserLoginInfo'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Total User
                  </a>
                </li>
                </Link>
              </ul>

              {/* Header Icons */}
              <div className="hidden xl:flex items-center space-x-5">
                {user.isLogin ? (
                  <button
                    onClick={hendlingLogout}
                    className="w-28 h-12 bg-[#57e0e2] text-white hover:bg-[#81e9eb] font-bold rounded-3xl"
                  >
                    Log out
                  </button>
                ) : (
                  <>
                    <Link to={'/signin'}>
                      <button className="w-28 h-12 bg-[#2F327D] hover:bg-[#3d40a0] font-bold text-white rounded-3xl">
                        Login
                      </button>
                    </Link>
                    <Link to={'/signup'}>
                      <button className="w-28 h-12 bg-[#57e0e2] text-white hover:bg-[#81e9eb] rounded-3xl">
                        Sign up
                      </button>
                    </Link>
                  </>
                )}
              </div>


<Link to={'/cart'} >
              {/* Shopping Cart */}
              <div className="hidden xl:flex bg-gray-100 justify-center items-center ml-6">
                <div className="relative py-2">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {user1.length}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
              </Link>
            </div>
           



            <Link to={'/cart'} >
            <div className="xl:hidden sm:flex bg-gray-100 mt-6 mr-6 ">
                <div className="relative py-2">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {user1.length}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
              </Link>



            {/* Mobile Hamburger Icon */}
            <div className="xl:hidden flex items-center mr-6">
              <button
                className="navbar-burger flex items-center"
                aria-label="Mobile menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

          </nav>

           


          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="flex flex-col bg-gray-100 text-black space-y-4 py-4 px-6 xl:hidden font-bold">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Category
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Contact Us
                </a>
              </li>
              {user.isLogin ? (
                <li>
                  <button
                    onClick={hendlingLogout}
                    className="w-full h-12 bg-[#57e0e2] text-white hover:bg-[#81e9eb] font-bold rounded-3xl"
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <>
                  <Link to={'/signin'}>
                    <li>
                      <button className="w-full h-12 bg-[#2F327D] hover:bg-[#3d40a0] font-bold text-white rounded-3xl">
                        Sign in
                      </button>
                    </li>
                  </Link>
                  <Link to={'/signup'}>
                    <li>
                      <button className="w-full h-12 bg-[#57e0e2] text-white hover:bg-[#81e9eb] rounded-3xl">
                        Sign up
                      </button>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;
