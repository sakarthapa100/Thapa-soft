import React from 'react';
import { useAuth } from '../store/auth'; // Adjust the path as necessary

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="py-12 bg-gray-800 mt-[5rem]">
      <div className="container mx-auto p-[9rem] grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem]">
        {services.map((service, index) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform p-3 transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${service.image || 'images/services.png'})` }}>
              <img src={service.image || 'images/services.png'} alt={service.title || 'service image'} className="hidden" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{service.title}</h2>
              <div className="flex justify-between items-center text-gray-600 mb-4">
                <p className="text-lg">{service.provider}</p>
                <p className="text-lg font-bold">{service.price}</p>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
