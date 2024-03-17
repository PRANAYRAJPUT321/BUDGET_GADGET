// Navbar.js
import React from 'react';
import "./Navbar.css"
import Footer from './Footer';
import Signin from './Singin';
import Navbar from './Navbar';

function Landingpage() {
    return (
      <div> 
        <Navbar/>
        <Signin/>
      <Footer/>
        </div>
    );
}

export default Landingpage;
