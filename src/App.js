import React, { Component } from 'react';
import img2 from '../Assets/logo/logo (4).png';
import '../css/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
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
                                <li><a href="/">Home</a></li>
                                <li><a href="about">About</a></li>
                                <li><a href="model">Vehicle models</a></li>
                                {/* <li><a href="../pages/testi.html">Testimonials</a></li> */}
                                <li><a href="team">Our team</a></li>
                                <li><a href="contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="navbar">
                            <div className="navbar__img">
                                <a href="/"><img src={img2} alt="" /></a>
                            </div>
                            <ul className="navbar__links">
                                <li><a href="/" className="home-link">Home</a></li>
                                <li><a href="about" className="about-link">About</a></li>
                                <li><a href="model" className="models-link">Vehicle models</a></li>
                                {/* <li><a href="../pages/testi.html" className="testi-link">Testimonials</a></li> */}
                                <li><a href="team" className="team-link">Our team</a></li>
                                <li><a href="contact" className="contact-link">Contact</a></li>
                            </ul>
                            <div className="navbar__buttons">
                                <a className="navbar__buttons__sign-in" href="#">Sign-in</a>
                                <a className="navbar__buttons__register" href="#">Register</a>
                            </div>
                            <div className="mobile-hamb">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-menu-2">
                                    <path d="M4 6l16 0"></path>
                                    <path d="M4 12l16 0"></path>
                                    <path d="M4 18l16 0"></path>
                                </svg>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
