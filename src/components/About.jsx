import React from 'react';
import img1 from '../Assets/about/about-main.jpg'
// import img2 from '../Assets/logo/logo (4).png'
import img3 from '../Assets/about/icon1.png'
import img4 from '../Assets/about/icon2.png'
import img5 from '../Assets/about/icon3.png'
import img6 from '../Assets/plan/icon1.png'
import img7 from '../Assets/plan/icon2.png'
import img8 from '../Assets/plan/icon3.png'
import '../css/About.css'
export default function About() {
    return (
        <div>
            
            <main className="about-page">
                <section className="hero-pages">
                    <div className="hero-pages__overlay"></div>
                    <div className="container">
                        <div className="hero-pages__text">
                            <h3>About</h3>
                            <p><a href="/">Home</a> / About</p>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="about-main">
                        <img className="about-main__img" src={img1} alt="car-renting" />
                        <div className="about-main__text">
                            <h3>About Company</h3>
                            <h2>You start the engine and your adventure begins</h2>
                            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.
                                Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to
                                affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                            <div className="about-main__text__icons">
                                <div className="about-main__text__icons__box">
                                    <img src={img3} alt="car-icon" />
                                    <span>
                                        <h4>20</h4>
                                        <p>Car Types</p>
                                    </span>
                                </div>
                                <div className="about-main__text__icons__box">
                                    <img src={img4} alt="car-icon" />
                                    <span>
                                        <h4>85</h4>
                                        <p>Rental Outlets</p>
                                    </span>
                                </div>
                                <div className="about-main__text__icons__box">
                                    <img src={img5} alt="car-icon" className="last-fk" />
                                    <span>
                                        <h4>75</h4>
                                        <p>Repair Shop</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="plan-section">
                        <div className="container">
                            <div className="plan-container">
                                <div className="plan-container__title">
                                    <h3>Plan your trip now</h3>
                                    <h2>Quick &amp; easy car rental</h2>
                                </div>
                                <div className="plan-container__boxes">
                                    <div className="plan-container__boxes__box">
                                        <img src={img6} alt='icon'/>
                                        <h3>Select Car</h3>
                                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car
                                            to meet your needs
                                        </p>
                                    </div>
                                    <div className="plan-container__boxes__box">
                                        <img src={img7} alt="icon_img" />
                                        <h3>Contact Operator</h3>
                                        <p>Our knowledgeable and friendly operators are always ready to help with any questions
                                            or concerns
                                        </p>
                                    </div>
                                    <div className="plan-container__boxes__box">
                                        <img src={img8} alt="icon_img" />
                                        <h3>Let's Drive</h3>
                                        <p>Whether you're hitting the open road, we've got you covered with our wide range of
                                            cars
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a car by getting in touch with us</h2>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-phone">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a110 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                </svg>
                                <h3>
                                    (123) 456-7869
                                </h3>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
}




