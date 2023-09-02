import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const navStyle = {
  color: 'white'
}

const activeLink = {
  fontWeight: 'bold'
}

const barStyle = {
  width: '100%'
}
function Navigation(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={barStyle}>
        <a className="navbar-brand" style={navStyle} href="#">
          Mohamed Hussein
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/about" className="nav-link" style={navStyle}>
              About Me
            </NavLink>
            <NavLink to="/portfolio" className="nav-link" style={navStyle}>
              Portfolio
            </NavLink>
  
            {/* Commented out external links */}
            {/* <a className="nav-link" href="https://github.com/phill-star?tab=repositories">GitHub</a>
            <a className="nav-link" href="https://www.linkedin.com/in/mohamed-hussein-569aa828a/">LinkedIn</a> */}
  
            <NavLink to="/resume" className="nav-link" style={navStyle}>
              Resume
            </NavLink>
            <NavLink to="/contact" className="nav-link" style={navStyle}>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navigation;
  
