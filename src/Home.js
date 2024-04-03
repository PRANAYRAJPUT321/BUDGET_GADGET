import React from 'react';
import "./Home.css"
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
function Home(){

  const location=useLocation()
  return(
<div>
  <Navbar/>
  <h1>Hello {location.state.id}Welcome to home page
  </h1>

</div>
  );
};

export default Home;