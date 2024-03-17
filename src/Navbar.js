// Navbar.js
import React from 'react';
import "./Navbar.css"


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
       
        </div>
    );
}

export default Navbar;
