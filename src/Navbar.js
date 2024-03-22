// Navbar.js
import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <div>
        <nav className="navbar">
            <div className="logo">
                <span className='heading'>Budget Gadget</span>
            </div>
            <div className="nav-links">
                <Link to="/Signin"> Signin </Link>
                <Link to="/SignUp"> Signup </Link>
            </div>
        </nav>
        
        </div>
    );
}

export default Navbar;
