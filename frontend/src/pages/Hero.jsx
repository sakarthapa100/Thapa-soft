import React from 'react';

const Hero = () => {
  return (
    <div className='flex '> 
      <main className="bg-gray-800 text-white  p-5">
        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">We are the World Best IT Company</p>
              <h1 className="text-4xl font-bold text-white">Welcome to Thapa Soft</h1>
              <p className="text-gray-300">
                Welcome to the nexus of innovation and technology where your business transformation begins. At Thapa Soft we specialize in delivering cutting-edge IT solutions and bespoke services designed to elevate your brand in the digital landscape. Connect with us today and embark on a journey towards technological excellence.
              </p>
              <div className="flex space-x-4">
                <a href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Connect Now</a>
                <a href="/services" className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600">Learn More</a>
              </div>
            </div>

            {/* Hero images */}
            <div className="">
              <img
                src="/images/home.png"
                alt="coding together"
                className="w-[39rem]  h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
