import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import "./App.css";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer';

function App() {
  const [formData, setformData] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);

  function getFormData(data){
    setformData(data);
  }

  return (
    <div>
      <Toaster/>
      <Navbar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} userName={formData.firstName}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLogedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLogedIn} getFormData={getFormData}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
