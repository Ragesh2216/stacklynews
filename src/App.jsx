import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./RouterDOm/Home";
import About from "./RouterDOm/About";
import Contact from "./RouterDOm/Contact";
import Service from "./RouterDOm/Service";
import Latest from"./RouterDOm/Latest";
import Lifestyle from "./RouterDOm/Lifestyle";
import Education from "./RouterDOm/Education";
import Business from "./RouterDOm/Business";
import World from "./RouterDOm/World";


export default function App() {
 return (
      <div>
        <div className="titlebar">
          <h2>STACKLY NEWS</h2>
        </div>
      <BrowserRouter>
        <div className="menu">
          <Link to="">Home</Link>
          <Link to="/Latest">LATEST</Link>
          <Link to="/Lifestyle">Lifestyle</Link>
          <Link to="/Education">Education</Link>
          <Link to="/World">World</Link>
          <Link to="/Business">Business</Link>
          
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Service">Service</Link>
        </div>
        <Routes>
          <Route path="" element={<Home />} />
           <Route path="/Latest" element={<Latest />} />
            <Route path="/Lifestyle" element={<Lifestyle/>} />
            <Route path="/Education" element={<Education />} />
             <Route path="/World" element={<World />} />
             <Route path="/Business" element={<Business />} />

          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />}/>
            
          
          
        </Routes>
      </BrowserRouter>



      <footer>
          <p>&copy; {new Date().getFullYear()} STACKLY NEWS. All rights reserved.</p>
        </footer>
    </div>
  );
}