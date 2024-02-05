// Navbar.js
import React from 'react';
import "./Navbar.css"
import Footer from './Footer';
import Signin from './Singin';


function Navbar() {
  return (
    <div>
    <nav className='container'>
      <div src="" className="logo"></div>
      <div className="heading">Signin </div>
      </nav>
      <Signin/>
      <Footer/>
      </div>
   
    
  );
}

export default Navbar;
