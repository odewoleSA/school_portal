import React from 'react';
import './App.css';
import Nav from './main_nav';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Career from './Career'
import NewStudent from './NewStudent';
import ReturnStudent from './ReturnStudent'
import Signup from './Signup';
import Login from './Login'
import PageFooter from './PageFooter'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Routes>
          <Route path="/schl_portal" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/new-student" element={<NewStudent />} />
          <Route path="/returning-student" element={<ReturnStudent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
