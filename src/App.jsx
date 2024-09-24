import { useState } from 'react'
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componends/Header/Header'


import Home from './Pages/Home/Home';


import Services from './Pages/service/services'
import Projects from './Pages/project/projects'


import './App.css'

function App() {
 return(
  <div className='appcom'>
   
      <Router>
       < Header/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          
          <Route path="/Services" element={ <Services /> }/>
          
          
          <Route path="/Projects" element={ <Projects /> }/>
        </Routes>
      </Router>
  </div>
  
 )

}
  

export default App
