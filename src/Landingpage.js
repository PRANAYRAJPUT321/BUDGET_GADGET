// Navbar.js
import React from 'react';
import "./Landingpage.css"
import Footer from './Footer';
import Signin from './Signin';
import Navbar from './Navbar';

function Landingpage() {
    return (
      <div>
          <div className='body'> 
      <Navbar/>
      <Signin/>
      <Footer/>
      </div>
       
      
        
        </div>
    );
}

export default Landingpage;
