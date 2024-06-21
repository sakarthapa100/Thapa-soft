// src/Testimonial.js
import React from 'react';
import './Testi.css';

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
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <p className="testimonial-text">"{testimonial.text}"</p>
          <p className="testimonial-name">- {testimonial.name}</p>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
