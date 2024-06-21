import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">Thapa Soft</a>
          </div>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/about'>About us</NavLink></li>
              <li><NavLink to='/service'>Services</NavLink></li>
              <li><NavLink to='/register'>Register</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
