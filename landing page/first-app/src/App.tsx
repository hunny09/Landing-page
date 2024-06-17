import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  return (
    <>
    {/* <Login /> */}
    

      <Router>
        {/* <div className="contain"> */}
          <Routes>
            <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home/>} />
          
          <Route path='/Register' element={<Register/>} />
          
            
          </Routes>
        {/* </div> */}
        
      </Router>
      </>
  );
}

export default App;
