import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-gray-800 p-7'>
      <header className='container mx-auto flex items-center justify-between '>
        <div className="text-white text-2xl font-bold">
          <a href="/">Thapa Soft</a>
        </div>
        <nav>
          <ul className='flex space-x-9'>
            <li><NavLink to='/' className='text-white hover:text-red-400'>Home</NavLink></li>
            <li><NavLink to='/contact' className='text-white hover:text-red-600'>Contact</NavLink></li>
            <li><NavLink to='/about' className='text-white hover:text-gray-400'>About us</NavLink></li>
            <li><NavLink to='/service' className='text-white hover:text-gray-400'>Services</NavLink></li>
            <li><NavLink to='/register' className='text-white hover:text-gray-400'>Register</NavLink></li>
            <li><NavLink to='/login' className='text-white hover:text-gray-400'>Login</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
