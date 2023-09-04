import React from 'react';
import './App.css';
import Nav from './Components/main_nav';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact';
import Career from './Pages/Career'
import NewStudent from './Pages/NewStudent';
import ReturnStudent from './Pages/ReturnStudent'
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import PageFooter from './Components/PageFooter'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Routes>
          <Route path="/school_portal" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/new-student" element={<NewStudent />} />
          <Route path="/returning-student" element={<ReturnStudent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
