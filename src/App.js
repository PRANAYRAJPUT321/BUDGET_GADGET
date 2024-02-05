import React from 'react';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Signin from './Singin';

function App (){
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar/>}/>
    <Route path="/Footer" element={<Footer/>}/>
    <Route path="/Sign" element={<Signin/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;

