import React from 'react';
import Hero from "../pages/Hero";
import Hero2 from "../pages/Hero2";
import { Analytics } from '../components/Analytics';
import Testimonial from '../components/Testi';

export const Home = () => {
  return (
    <div className="bg-gray-800 text-white  ">
      <div className='mt-[205rem] '>
              <Hero />
      </div>

      <Analytics />
        <Hero2 />
     
      
      <Testimonial />

    </div>
  );
};
