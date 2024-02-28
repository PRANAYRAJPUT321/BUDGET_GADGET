// Navbar.js
import React from 'react';
import "./Navbar.css"
import Footer from './Footer';
import Signin from './Singin';

function Navbar() {
    return (
      <div>
        <nav className="navbar">
            <div className="logo">
                <span className='heading'>Budget Gadget</span>
            </div>
            <div className="nav-links">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
            </div>
        </nav>
        <Signin/>
      <Footer/>
        </div>
    );
}

export default Navbar;
