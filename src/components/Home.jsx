import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faQuoteRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons from FontAwesome library
import img1 from '../Assets/hero/hero-bg.png'
import img2 from '../Assets/hero/main-car.png'
import img3 from '../Assets/plan/icon1.png'
import img4 from '../Assets/plan/icon2.png'
import img5 from '../Assets/plan/icon3.png'
import img6 from '../Assets/cars-big/audia1.jpg'
import img7 from '../Assets/chooseUs/main.png'
import img8 from '../Assets/chooseUs/icon1.png'
import img9 from '../Assets/chooseUs/icon2.png'
import img10 from '../Assets/chooseUs/icon3.png'
import img11 from '../Assets/teste/pfp1.jpg'
import img12 from '../Assets/teste/pfp2.jpg'
import img13 from '../Assets/download/appstore.svg'
import img14 from '../Assets/download/googleapp.svg'
import '../css/Home.css'
import React from 'react';


export default function Home() {
  return (
    <div>
      <main>
        <section id="home" className="hero-section">
          <div className="container">
            <img className="bg-shape" src={img1} alt="Bg pic" />
            <div className="hero-content">
              <div className="hero-content-text">
                <h4>Plan your trip now</h4>
                <h1>Save <span>big</span> with our car rental</h1>
                <p>
                  Rent the car of your dreams. Unbeatable prices, unlimited miles,
                  flexible pick-up options and much more.
                </p>
                <div className="hero-content-text-btns">
                  <a className="hero-content-text-btns-book-ride" href="/">Book Ride &nbsp;<i
                      className="fa-regular fa-circle-check"></i></a>
                  <a className="hero-content-text-btns-learn-more" href="/">Learn More &nbsp; <i
                      className="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
              <img className="hero-content-car-img" src={img2} alt="main img" />
            </div>
          </div>
        </section>
        <section id="booking-section" className="book-section">
          <div className="modal-overlay"></div>
          <div className="container">
            <div className="book-content">
              <div className="book-content-box">
                <h2>Book a car</h2>
                <p className="error-message">All fields required!</p>
                <p className="booking-done">Check your email to confirm an order.</p>
                <form className="box-form">
                  <div className="box-form-car-type">
                    <label> <i className="fa-solid fa-car"></i> Select Your Car Type <b>*</b></label>
                    <select>
                      <option>Select your car type</option>
                      <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                      <option value="VW Golf 6">VW Golf 6</option>
                      <option value="Toyota Camry">Toyota Camry</option>
                      <option value="BMW 320 ModernLine">
                        BMW 320 ModernLine
                      </option>
                      <option value="VW Passat CC">VW Passat CC</option>
                    </select>
                  </div>
                  <div className="box-form-car-type">
                    <label><i className="fa-solid fa-location-dot"></i> Pick-up <b>*</b> </label>
                    <select>
                      <option>Select pick up location</option>
                      <option>Belgrade</option>
                      <option>Novi Sad</option>
                      <option>Nis</option>
                      <option>Kragujevac</option>
                      <option>Subotica</option>
                    </select>
                  </div>
                  <div className="box-form-car-type">
                    <label><i className="fa-solid fa-location-dot"></i> Drop-off <b>*</b></label>
                    <select>
                      <option>Select drop off location</option>
                      <option>Novi Sad</option>
                      <option>Belgrade</option>
                      <option>Nis</option>
                      <option>Kragujevac</option>
                      <option>Subotica</option>
                    </select>
                  </div>
                  <div className="box-form-car-time">
                    <label htmlFor="picktime"><i className="fa-regular fa-calendar-days"></i> Pick-up <b>*</b></label>
                    <input type="date" id="picktime" />
                  </div>
                  <div className="box-form-car-time">
                    <label htmlFor="droptime"><i className="fa-regular fa-calendar-days"></i> Drop-of <b>*</b></label>
                    <input type="date" id="droptime" />
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container-title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>
            <div className="plan-container-boxes">
              <div className="plan-container-boxes-box">
                <img src={img3} alt="Select Car Icon" />
                <h3>Select Car</h3>
                <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
              </div>
              <div className="plan-container-boxes-box">
                <img src={img4} alt="Contact Operator Icon" />
                <h3>Contact Operator</h3>
                <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
              </div>
              <div className="plan-container-boxes-box">
                <img src={img5} alt="Let's Drive Icon" />
                <h3>Let's Drive</h3>
                <p>Whether you're hitting the open road, we've got you covered with our wide range of cars.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container-title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
            </div>
            <div className="pick-container-car-content">
              {/* <div className="pick-box">
                <button className="colored-button" id="btn1" onClick={() => changeImages('images/cars-big/audia1.jpg')}>Audi A1 S-Line</button>
                <button className="colored-button" id="btn2" onClick={() => changeImages('images/cars-big/golf6.jpg')}>VW Golf 6</button>
                <button className="colored-button" id="btn3" onClick={() => changeImages('images/cars-big/toyotacamry.jpg')}>Toyota Camry</button>
                <button className="colored-button" id="btn4" onClick={() => changeImages('images/cars-big/bmw320.jpg')}>BMW 320 ModernLine</button>
                <button className="colored-button" id="btn5" onClick={() => changeImages('images/cars-big/benz.jpg')}>Mercedes-Benz GLK</button>
                <button className="colored-button" id="btn6" onClick={() => changeImages('images/cars-big/passatcc.jpg')}>VW Passat CC</button>
              </div> */}
              <div className="box-cars">
                <div className="pick-car">
                  <img className="pick-img" src={img6} alt="Car" />
                </div>
                <div className="pick-description">
                  <div className="pick-description-price">
                    <span>$45</span>/ rent per day
                  </div>
                  <div className="pick-description-table">
                    <div className="pick-description-table-col">
                      <span>Model</span>
                      <span>Audi</span>
                    </div>
                    <div className="pick-description-table-col">
                      <span>Mark</span>
                      <span>A1</span>
                    </div>
                    <div className="pick-description-table-col">
                      <span>Year</span>
                      <span>2012</span>
                    </div>
                    <div className="pick-description-table-col">
                      <span>Doors</span>
                      <span>4/5</span>
                    </div>
                    <div className="pick-description-table-col">
                      <span>AC</span>
                      <span>Yes</span>
                    </div>
                    <div className="pick-description-table-col">
                      <span>Transmission</span>
                      <span>Manual</span>
                    </div>
                    <div className="pick-description-table-col">
                      <span>Fuel</span>
                      <span>Gasoline</span>
                    </div>
                    <a className="cta-btn" href="#booking-section">Reserve Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content-text">
              <h2>Save big with our cheap car rental!</h2>
              <p>Top Airports. Local Suppliers. <span>24/7 </span>Support.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img className="choose-container__img" src={img7} alt="Main" />
            <div className="text-container">
              <div className="text-container-left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you
                  with the best value for your money, so you can enjoy top-quality services and products without breaking
                  the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your
                  chance to save big.</p>
                <a href="/">Find Details &nbsp; <FontAwesomeIcon icon={faAngleRight} /></a>
              </div>
              <div className="text-container-right">
                <div className="text-container-right-box">
                  <img src={img8} alt="Icon 1" />
                  <div className="text-container-right-box-text">
                    <h4>Cross Country Drive</h4>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country
                      adventures.</p>
                  </div>
                </div>
                <div className="text-container-right-box">
                  <img src={img9} alt="Icon 2" />
                  <div className="text-container-right-box-text">
                    <h4>All Inclusive Pricing</h4>
                    <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing
                      policy.</p>
                  </div>
                </div>
                <div className="text-container-right-box">
                  <img src={img10} alt="Icon 3" />
                  <div className="text-container-right-box-text">
                    <h4>No Hidden Charges</h4>
                    <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest
                      pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content-title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>Discover the positive impact we've made on our clients by reading through their testimonials. Our
                clients have experienced our service and results, and they're eager to share their positive experiences
                with you.</p>
            </div>
            <div className="all-testimonials">
              <div className="all-testimonials-box">
                <span className="quotes-icon"><FontAwesomeIcon icon={faQuoteRight} /></span>
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental
                  rates were very affordable. "</p>
                <div className="all-testimonials-box-name">
                  <div className="all-testimonials-box-name-profile">
                    <img src={img11} alt="Profile 1" />
                    <span>
                      <h4>Parry Hotter</h4>
                      <p>Belgrade</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="all-testimonials-box box-2">
                <span className="quotes-icon"><FontAwesomeIcon icon={faQuoteRight} /></span>
                <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental
                  website!"</p>
                <div className="all-testimonials-box-name">
                  <div className="all-testimonials-box-name-profile">
                    <img src={img12} alt="Profile 2" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Novi Sad</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content-title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common
                Concerns and Inquiries.</p>
            </div>
            <div className="all-questions">
              <div className="faq-box">
                <div id="q1" className="faq-box-question">
                  <p>1. What is special about comparing rental car deals?</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div id="q1" className="faq-box-answer">
                  Comparing rental car deals is important as it helps find the best deal that fits your budget and
                  requirements, ensuring you get the most value for your money. By comparing various options, you can find
                  deals that offer lower prices, additional services, or better car models. You can find car rental deals
                  by researching online and comparing prices from different rental companies.
                </div>
              </div>
              <div className="faq-box">
                <div id="q2" className="faq-box-question">
                  <p>2. How do I find the car rental deals?</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div id="q2" className="faq-box-answer">
                  You can find car rental deals by researching online and comparing prices from different rental
                  companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view
                  available rental options. It is also recommended to sign up for email newsletters and                   follow rental car
                  companies on social media to be informed of any special deals or promotions.
                </div>
              </div>
              <div className="faq-box">
                <div id="q3" className="faq-box-question">
                  <p>3. How do I find such low rental car prices?</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div id="q3" className="faq-box-answer">
                  Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices
                  from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from
                  multiple rental car companies. Look for discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes
                  result in lower prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so
              intention defective at convinced. Led income months itself and houses you.</p>
            <div className="download-text-btns">
              <img src={img13} alt="Google App" />
              <img src={img14} alt="App Store" />
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}





 