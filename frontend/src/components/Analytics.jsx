import React from 'react';

export const Analytics = () => {
  return (
    <>
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-24 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center bg-white p-16 rounded-xl ">
          <div className="py-8 md:py-0">
            <h2 className="text-6xl font-bold text-gray-800">50+</h2>
            <p className="text-lg text-gray-600">Registered Companies</p>
          </div>
          <div className="py-8 md:py-0">
            <h2 className="text-6xl font-bold text-gray-800">100,000+</h2>
            <p className="text-lg text-gray-600">Happy Clients</p>
          </div>
          <div className="py-8 md:py-0">
            <h2 className="text-6xl font-bold text-gray-800">100+</h2>
            <p className="text-lg text-gray-600">Projects Completed</p>
          </div>
        </div>
      </section>
    </>
  );
}
