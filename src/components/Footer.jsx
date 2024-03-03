import React from 'react';
import '../css/Footer.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content-1">
              <li><span>CAR</span>Rental</li>
              <li>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
              <li><a href="/"><i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789</a></li>
              <li><a href="/"><i className="fa-solid fa-envelope"></i>&nbsp; carrental@gmail.com</a></li>
              <li><a href="/" style={{ fontSize: '14px' }}>Design by bhaktidangri</a></li>
            </ul>
            <ul className="footer-content-2">
              <li>Company</li>
              <li><a href="/">New York</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Mobile</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">How we work</a></li>
            </ul>
            <ul className="footer-content-2">
              <li>WORKING HOURS</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>
            <ul className="footer-content-2">
              <li>SUBSCRIPTION</li>
              <li><p>Subscribe your Email address for latest news &amp; updates.</p></li>
              <li><input type="email" placeholder="Enter Email Address" /></li>
              <li><button className="submit-email">Submit</button></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
