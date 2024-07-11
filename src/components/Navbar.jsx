import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { IoPerson } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { Outlet, Link } from 'react-router-dom';


function Navbar({ productsInCart=[], setCartVisible}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="fixed z-40 top-0 left-4 right-4 bg-[#E6F2E6]">
        <div className="relative flex justify-between items-center flex-wrap lg:flex-nowrap px-4 py-2">
          <Link to={'/'} className="flex items-center">
            <img className='w-2/3 lg:w-1/2' src={Logo} alt="" />
            <p className='flex flex-row gap-1 text-[#008080]'>Gadget <b className='text-[#EF5F43]'>HUB</b></p>
          </Link>

          <div className="flex lg:flex-2">
            <button onClick={toggleDropdown} type="button" className="lg:hidden text-[#007300] hover:text-[#007300] focus:outline-none focus:ring-2 focus:ring-[#007300] rounded-lg inline-flex items-center justify-end">
              <svg className={`w-8 h-8 ${isDropdownOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-8 h-8 ${isDropdownOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div className={`lg:flex lg:items-center  w-full lg:w-auto lg:order-2 transition-transform duration-300 ${isDropdownOpen ? 'block' : 'hidden lg:block '} origin-top`} >
            <ul className="flex-col text-[#555555] lg:flex-row lg:items-center lg:space-x-2 flex  mt-4 lg:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to={'/'} className=" text-md hover:border hover:border-t-[#F57051] hover:border-y-2  font-bold text-md  hover:text-[#292929] block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Homepage</Link>
              </li>
              <li>
                <Link to={'/'} className="hover:border hover:border-t-[#F57051] hover:border-y-2 font-bold text-md hover:shadow-2xl hover:text-[#292929] block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">About us</Link>
              </li>
              <li>
                <Link to={'/products'} className= "hover:border hover:border-t-[#F57051] hover:border-y-2 font-bold text-md hover:shadow-2xl hover:text-[#292929] block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Shop</Link>
              </li>
              <li>
                <Link to={'/'} className="hover:border hover:border-t-[#F57051] hover:border-y-2 font-bold text-md hover:shadow-2xl hover:text-[#292929] block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Contact us</Link>
              </li>
              
              
    
            </ul>
          </div>

          <div className={`lg:flex lg:items-center w-full lg:w-auto lg:order-2 gap-4 transition-transform duration-300 ${isDropdownOpen ? 'block' : 'hidden lg:block '} origin-top`}>
          <IoPerson className='border rounded-full  text-white w-6 h-6 p-1' style={{ background: 'linear-gradient(to left, #FE8A68 0%, #EF5F43 100%)' }}  />
          
          
          <button
              className='bg-transparent cursor-pointer relative'
              onClick={() => setCartVisible(true)}>
              <BiShoppingBag className='border rounded-full text-white w-6 h-6 p-1' style={{ background: 'linear-gradient(to left, #FE8A68 0%, #EF5F43 100%)' }} />
              {productsInCart.length > 0 && (
                <span className="absolute top-[-5px] right-[-5px] w-5 h-5 rounded-[12px] bg-green-500 text-white flex items-center justify-center text-xs">
                  {productsInCart.length}
                </span>
              )}
            </button>
          
          </div>
        </div>
      </nav>
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
