import React from 'react';
import { useAuth } from '../store/auth'; // Adjust the path as necessary

const Service = () => {
  const { services, isLoggedIn, user } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Our Services</h1>
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
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
