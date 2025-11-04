import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./RouterDOm/Home.jsx"; 
import About from "./RouterDOm/About.jsx";
import Contact from "./RouterDOm/Contact.jsx";
import Service from "./RouterDOm/Service.jsx";
import Latest from"./RouterDOm/Latest.jsx";
import Lifestyle from "./RouterDOm/Lifestyle.jsx";
import Education from "./RouterDOm/Education.jsx";
import Business from "./RouterDOm/Business.jsx";
import World from "./RouterDOm/World.jsx";
import Login from "./RouterDOm/Login.jsx";
import Footer from"./RouterDOm/Footer.jsx";

export default function App() { 
  // 3. DEFINE STATE FOR MENU TOGGLE
  const [isOpen, setIsOpen] = useState(false);

  // 4. DEFINE THE TOGGLE FUNCTION
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* WRAPPER FOR NAVIGATION ELEMENTS */}
      <BrowserRouter> 
        
        {/* === HEADER (Appears on EVERY page) === */}
        <div className="titlebar">
          <h2>STACKLY </h2>
        </div>
        
        <div className="menu-container"> 
          
          {/* HAMBURGER TOGGLE BUTTON */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'} 
          </button>
          
          {/* NAVIGATION LINKS - CLASS IS CONDITIONAL */}
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            {/* All links call toggleMenu to close the menu upon navigation */}
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/Latest" onClick={toggleMenu}>LATEST</Link>
            <Link to="/Lifestyle" onClick={toggleMenu}>Lifestyle</Link>
            <Link to="/Education" onClick={toggleMenu}>Education</Link>
            <Link to="/World" onClick={toggleMenu}>World</Link>
            <Link to="/Business" onClick={toggleMenu}>Business</Link>
            <Link to="/About" onClick={toggleMenu}>About</Link>
            <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
            <Link to="/Service" onClick={toggleMenu}>Service</Link>
            <Link to="/Login" onClick={toggleMenu}>Login</Link>
          </div>
        </div>

        {/* === MAIN CONTENT (Content Changes) === */}
        <div className="main-content-wrapper">
            <Routes>
              {/* Corrected path names used for element prop */}
              <Route path="/" element={<Home />} />
              <Route path="/Latest" element={<Latest />} />
              <Route path="/Lifestyle" element={<Lifestyle/>} />
              <Route path="/Education" element={<Education />} />
              <Route path="/World" element={<World />} />
              <Route path="/Business" element={<Business />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Service" element={<Service />}/>
              <Route path="/Login" element={<Login />}/>
              
             
            </Routes>
        </div>

    
        <Footer />
        
      </BrowserRouter>

      {/* Removed old redundant <footer> tag here */}
      
    </div>
  );
}
