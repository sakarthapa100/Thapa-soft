import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    text: "This service is fantastic! It completely exceeded my expectations.",
    role: "CEO, Example Corp"
  },
  {
    name: "Jane Smith",
    text: "An absolute pleasure to work with. Highly recommended!",
    role: "CTO, Another Company"
  },
  {
    name: "Samuel Green",
    text: "Top-notch support and exceptional quality. Will use again.",
    role: "Freelancer"
  },
  {
    name: "John Doe",
    text: "This service is fantastic! It completely exceeded my expectations.",
    role: "CEO, Example Corp"
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6 m-4 max-w-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
          <p className="text-lg mb-4 leading-relaxed">"{testimonial.text}"</p>
          <p className="font-bold mb-2">- {testimonial.name}</p>
          <p className="italic text-gray-400">{testimonial.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
