import React, { useState } from 'react';
import { FaGlobe, FaUser, FaCog, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-10 top-0 ">
      <div className="container mx-auto flex items-center justify-between p-5 w-full">
        {/* Left Side - Logo */}
        <a href="#" className='flex items-center space-x-2'>
          <h1 className='text-[30px] font-bold text-white font-[Roboto] tracking-widest'>TESLA</h1>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-white w-6 h-6" /> : <FaBars className="text-white w-6 h-6" />}
        </div>

        {/* Center - Navigation Links */}
        <ul className={`hidden md:flex space-x-12 font-medium font-[Roboto]`}>
          <li><a href="#" className="text-[#FFFFFF] cursor-pointer">Vehicle</a></li>
          <li><a href="#" className="text-[#FFFFFF] cursor-pointer">Energy</a></li>
          <li><a href="#" className="text-[#FFFFFF] cursor-pointer">Charging</a></li>
          <li><a href="#" className="text-[#FFFFFF] cursor-pointer">Discover</a></li>
          <li><a href="#" className="text-[#FFFFFF] cursor-pointer">Shop</a></li>
          <li><a href="#" className="text-[#FFFFFF] cursor-pointer">We, Robot</a></li>
        </ul>

        {/* Right Side - Icons */}
        <div className="hidden md:flex space-x-4">
          <FaGlobe className="text-[#FFFFFF] cursor-pointer h-6 w-6" />
          <FaUser className="text-[#FFFFFF] cursor-pointer h-6 w-6" />
          <FaCog className="text-[#FFFFFF] cursor-pointer h-6 w-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col z-20">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <div onClick={toggleMenu} className="cursor-pointer">
              <FaTimes className="text-black w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col w-full px-4">
            <ul className="flex flex-col space-y-4 w-full">
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Vehicle</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Energy</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Charging</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Discover</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Shop</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">We, Robot</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Support</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex justify-between items-center w-full py-2 hover:bg-gray-100 transition duration-200">
                <span className="text-black cursor-pointer">Account</span>
                <FaChevronRight className="text-black h-5 w-5" />
              </li>
              <li className="flex items-center w-full py-2">
                <FaGlobe className="text-black cursor-pointer h-6 w-6" />
                <span className="ml-2 text-black cursor-pointer">United States</span>
              </li>
              <li className="flex items-center w-full py-2">
                <FaUser className="text-black cursor-pointer h-6 w-6" />
                <span className="ml-2 text-black cursor-pointer">Account</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
