import './App.css';
import React, { Component } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Team from './components/Team';
import Model from './components/Model';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import img2 from '../src/Assets/logo/logo (4).png'

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <div className="mobile-navbar">
                <div className="mobile-navbar__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="tabler-icon tabler-icon-x">
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </div>
                <ul className="mobile-navbar__links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/model">Vehicle Models</Link></li>
                  {/* <li><Link to="/testimonials">Testimonials</Link></li> */}
                  <li><Link to="/team">Our Team</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="navbar">
                <div className="navbar__img">
                  <a href="/"><img src={img2} alt='logo' /></a>
                </div>
                <ul className="navbar__links">
                  <li className="home-link"><Link to="/">Home</Link></li>
                  <li className="about-link"><Link to="/about">About</Link></li>
                  <li className="models-link"><Link to="/model">Vehicle Models</Link></li>
                  {/* <li className="testi-link"><Link to="/testimonials">Testimonials</Link></li> */}
                  <li className="team-link"><Link to="/team">Our Team</Link></li>
                  <li className="contact-link"><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="navbar__buttons">
                  {/* <a className="navbar__buttons__sign-in" href="/">Sign In</a> */}
                  <a className="navbar__buttons__register" href="/log">Sign In/Register</a>
                </div>
                <div className="mobile-lamb">
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/model" element={<Model />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
        
        
      </Router>
      
    )
  }
}

