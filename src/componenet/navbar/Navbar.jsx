import React, { useContext, useState } from 'react';
import image from './image/Group 112.png'
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../utils/utils';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';



const Navbar = () => {
  // State to handle menu open/close for mobile
  const [menuOpen, setMenuOpen] = useState(false);


  const { user, setUser } = useContext(AuthContext);
  
  console.log('user', user);
  

  function hendlingLogout() {


    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
    
    
  }

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto w-full">
          {/* navbar */}
          <nav className="flex justify-between bg-[#49BBBD] text-white w-full">
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
                <Link to={'/Product'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                  Product
                  </a>
                </li>
                </Link> 
                <Link to={'/Cart'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Cart
                  </a>
                </li>
                </Link>
              </ul>

              {/* Header Icons */}
              <div className="hidden md:flex items-center space-x-5">

              {user.isLogin ? ( <button onClick={hendlingLogout} className='w-28 h-12 bg-white text-black hover:bg-[#e7e6e6]  rounded-3xl'>
                  log out                </button>) : (<>   <Link to={'/signin'}> <button className='w-28 h-12 bg-white hover:bg-[#e7e6e6] text-black rounded-3xl'>
                  Login
                </button></Link>
               <Link to={'/signup'}><button className='w-28 h-12 bg-[#57e0e2] text-white hover:bg-[#81e9eb]  rounded-3xl '>
                  Sign up
                </button> </Link></> ) }
            
               
              </div>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="xl:hidden flex items-center mr-6">
              <button
                className="navbar-burger flex items-center"
                aria-label="Mobile menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
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
          
          <ul className="flex flex-col bg-[#49BBBD] text-white space-y-4 py-4 px-6 xl:hidden font-bold">
              <Link to={'/'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Home
                  </a>
                </li>
                </Link> 
                <Link to={'/Product'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                  Product
                  </a>
                </li>
                </Link> 
                <Link to={'/Cart'}>
                <li>
                  <a className="hover:text-gray-500" href="#">
                    Cart
                  </a>
                </li>
                </Link>
            

                {user.isLogin? (<li>
                <button onClick={hendlingLogout} className='w-full h-12 bg-white hover:bg-[#e7e6e6] text-black rounded-3xl'>
                  Log out
                </button>
              </li>): (<>
               
             <Link to={'/signin'}> <li>
                <button className='w-full h-12 bg-white hover:bg-[#e7e6e6] text-black black rounded-3xl'>
                  Sign in
                </button>
              </li></Link>
              <Link to={'/signup'}> <li>
             <button className='w-full h-12 bg-[#57e0e2] text-white hover:bg-[#81e9eb] rounded-3xl'>
                  Sign up
                </button>
              </li></Link>  
              </>)}
              
             
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;
