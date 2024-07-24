import React from 'react';
import { GiHamburger } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-gray-900'>
      <div className='w-4/5 pb-8 border-b-2 border-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center'>
        {/* 1st part */}
        <div>
          <div className='flex px-13 py-5 justify-start items-center gap-3'>
            <a href="/" className='flex items-center gap-2'>
              <GiHamburger className='text-red-500' size={30} />
              <span className='text-white font-mono font-bold text-2xl sm:text-lg mt-2'>ThapaSoft</span>
            </a> 
          </div>
          <p className='text-white text-opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus quasi porro vel fuga! Placeat doloribus inventore pariatur?</p>
          <p className='mt-4 text-white'>support@gmail.com</p>
          <p className='text-red-500 text-lg font-bold'>+977 9877665444</p>
        </div>

        {/* 2nd part */}
        <div>
          <h1 className='text-lg font-semibold mb-8 text-white'>Products</h1>
          {['Chicken Burger', 'Chicken Burger', 'Chicken Burger', 'Chicken Burger', 'Chicken Burger'].map((product, index) => (
            <p key={index} className='mt-3 text-white opacity-75 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit'>
              {product}
            </p>
          ))}
        </div>

        {/* 3rd part */}
        <div>
          <h1 className='text-lg font-semibold mb-8 text-white'>Quick Link</h1>
          {['Home', 'About us', 'Contact us', 'Message us', 'Chicken Burger'].map((link, index) => (
            <p key={index} className='mt-3 text-white opacity-75 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit'>
              {link}
            </p>
          ))}
        </div>

        {/* 4th part */}
        <div>
          <h1 className='text-lg font-semibold mb-8 text-white'>Opening Hours</h1>
          <p className='text-white text-lg'>Monday - Friday: <span className='text-yellow-500'>9:00am - 9:00pm</span></p>
          <p className='text-white text-lg'>Saturday: <span className='text-yellow-500'>11:00am - 5:00pm</span></p>

          {/* Social media */}
          <div className='flex mt-8 items-center space-x-6'>
            <FaFacebook className='w-6 h-6 text-blue-600'/>
            <FaInstagram className='w-6 h-6 text-red-500'/>
            <FaTwitter className='w-6 h-6 text-blue-600'/>   
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className='text-white text-center opacity-75 mt-6'>&copy; 2022 ThapaSoft</p>
    </div>
  )
}

export default Footer;
