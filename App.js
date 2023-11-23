import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Projects from './Project';
import Teams from './Team';
import Tasks from './Tasks'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signin' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Project' element={<Projects/>}/>
      <Route path='/Team' element={<Teams/>}/>
      <Route path='/Task' element={<Tasks/>}/>
      <Route path='/Report' element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
