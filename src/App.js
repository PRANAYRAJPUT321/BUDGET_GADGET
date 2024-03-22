import React from 'react';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Signin from './Signin';
import SignUp from './SignUp';
import Home from './Home';
import Landingpage from './Landingpage';

function App (){
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landingpage/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Footer" element={<Footer/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;

