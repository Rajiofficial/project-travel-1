

import React from "react";
import './app.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import View from "./component/View";

const App = () => {
  return (
    <>

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<View />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path='main' element={< Main/>} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Footer />} />
        
      
      </Routes>
    </BrowserRouter>     
       
    </>
  )
}

export default App

