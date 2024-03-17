import React from 'react';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Signin from './Singin';
import Home from './Home';
import Landingpage from './Landingpage';

function App (){
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landingpage/>}/>
      <Route path="/Home" element={<Home/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Footer" element={<Footer/>}/>
    <Route path="/Sign" element={<Signin/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;

