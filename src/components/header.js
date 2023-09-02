import React, { Component } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; // Import Routes and Route
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Contact from '../components/contact';
import Navigation from '../components/navigation';
import Resume from '../components/resume';

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <div className="nav">
          <Navigation />
        </div>
        <div className="routes">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Header;
