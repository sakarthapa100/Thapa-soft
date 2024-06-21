import React from 'react';
import { useAuth } from '../store/auth'; // Adjust the path as necessary
import './Service.css'

export const Service = () => {
  const { services, isLoggedIn, user } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        {/* <h1 className="main-sheading">Our Services</h1> */}
        {isLoggedIn && user && <p>Authenticated as: {user.name}</p>}
      </div>
      <div className="container grid grid-three-cols">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={service.image || "images/services.png"} alt={service.title || "service image"} />
            </div>
            <div className="card-details">
              <p>{service.provider}</p>
              <p>{service.price}</p>
            </div>
            <h2>{service.title}</h2>
            <p className='des'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


