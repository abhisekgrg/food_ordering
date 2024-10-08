import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className='flex px-[100px] justify-between items-center h-[60px] bg-[#F37116]'>
        <img width="50px" src="images/logo1.svg" alt="Logo" />
        
        <ul className='flex gap-5 list-none text-white'>
          <li>
            <Link to="/" className="text-white hover:text-gray-400 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="/Menu" className="text-white hover:text-gray-400 cursor-pointer">Menu</Link>
          </li>
          <li>
            <Link to="/Category" className="text-white hover:text-gray-400 cursor-pointer">Category</Link>
          </li>
          <li>
            <Link to="/insert" className="text-white hover:text-gray-400 cursor-pointer">Insert Food</Link>
          </li>
          <li>
            <Link to="/lsearch" className="text-white hover:text-gray-400 cursor-pointer">Linear Search</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-400 cursor-pointer">Dashboard</Link>
          </li>
         
          <li>
            <Link to="/csearch" className="text-white hover:text-gray-400 cursor-pointer">Charater Search</Link>
          </li>
          <li>
            <Link to="/binarysearch" className="text-white hover:text-gray-400 cursor-pointer">Binary Search</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-white hover:text-gray-400 cursor-pointer">Contact</Link>
          </li>
        </ul>
        <div className='flex flex-row items-center text-white gap-5'>
        <IoSearchSharp className='text-2xl' />
        <li>
        
            <Link to="/cart" className="text-white hover:text-gray-400 cursor-pointer"><FaCartShopping className='text-2xl'/></Link>
          </li>
          <li>
        
        <Link to="/register" className="text-white hover:text-gray-400 cursor-pointer">Register</Link>
      </li>

      <li>
        
        <Link to="/login" className="text-white hover:text-gray-400 cursor-pointer">Login</Link>
      </li>
        <Button text="Click me" />
        
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
