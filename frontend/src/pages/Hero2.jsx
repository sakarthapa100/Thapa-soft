import React from 'react';

const Hero2 = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen p-5  ">
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
          {/* Hero images */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg">We are here to help you</p>
            <h1 className="text-4xl font-bold text-white">Get Started Today</h1>
            <p className="text-gray-300">
              Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Thapa Technical can help your business thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Connect Now</a>
              <a href="/services" className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
