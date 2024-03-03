import React from 'react';
import '../css/Model.css'
import img1 from '../Assets/cars-big/audi-box.png'
import img2 from '../Assets/cars-big/bmw320.jpg'


// Reusable SVG Icon Component
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-star">
    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
  </svg>
);

const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-car">
    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
  </svg>
);

const Model = () => {
  return (
    <div>
      <main className="models-section">
        <section className="hero-pages">
          <div className="hero-pages__overlay"></div>
          <div className="container">
            <div className="hero-pages__text">
              <h3>Vehicle Models</h3>
              <p><a href="/">Home </a>/ Vehicle Models</p>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img"><img src={img1} alt="Audi A1" /></div>
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Audi A1</p>
                    <span>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$45</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span><CarIcon />&nbsp; Audi</span>
                  <span style={{ textAlign: "right" }}>4/5 &nbsp; <CarIcon /></span>
                  <span><CarIcon />&nbsp; Manual</span>
                  <span style={{ textAlign: "right" }}>Diesel &nbsp; <CarIcon /></span>
                </div>
                <div className="models-div__box__descr__name-price__btn"><a href="/BookingForm.jsx">Book Ride</a></div>
              </div>
            </div>

            {/* Repeat the same structure for other vehicle models */}
            <div className="models-div__box">
              <div className="models-div__box__img"><img src={img2} alt="Another Car Model" /></div>
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>BMW</p>
                    <span>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span><CarIcon />&nbsp; BMW</span>
                  <span style={{ textAlign: "right" }}>4/5 &nbsp; <CarIcon /></span>
                  <span><CarIcon />&nbsp; Automatic</span>
                  <span style={{ textAlign: "right" }}>Petrol &nbsp; <CarIcon /></span>
                </div>
                <div className="models-div__box__descr__name-price__btn"><a href="/">Book Ride</a></div>
              </div>
            </div>


            <div className="models-div__box">
              <div className="models-div__box__img"><img src={img2} alt="Another Car Model" /></div>
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>BMW</p>
                    <span>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span><CarIcon />&nbsp; BMW</span>
                  <span style={{ textAlign: "right" }}>4/5 &nbsp; <CarIcon /></span>
                  <span><CarIcon />&nbsp; Automatic</span>
                  <span style={{ textAlign: "right" }}>Petrol &nbsp; <CarIcon /></span>
                </div>
                <div className="models-div__box__descr__name-price__btn"><a href="/">Book Ride</a></div>
              </div>
            </div>



            <div className="models-div__box">
              <div className="models-div__box__img"><img src={img2} alt="Another Car Model" /></div>
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>BMW</p>
                    <span>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span><CarIcon />&nbsp; BMW</span>
                  <span style={{ textAlign: "right" }}>4/5 &nbsp; <CarIcon /></span>
                  <span><CarIcon />&nbsp; Automatic</span>
                  <span style={{ textAlign: "right" }}>Petrol &nbsp; <CarIcon /></span>
                </div>
                <div className="models-div__box__descr__name-price__btn"><a href="/">Book Ride</a></div>
              </div>
            </div>



            <div className="models-div__box">
              <div className="models-div__box__img"><img src={img2} alt="Another Car Model" /></div>
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>BMW</p>
                    <span>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span><CarIcon />&nbsp; BMW</span>
                  <span style={{ textAlign: "right" }}>4/5 &nbsp; <CarIcon /></span>
                  <span><CarIcon />&nbsp; Automatic</span>
                  <span style={{ textAlign: "right" }}>Petrol &nbsp; <CarIcon /></span>
                </div>
                <div className="models-div__box__descr__name-price__btn"><a href="/">Book Ride</a></div>
              </div>
            </div>



            <div className="models-div__box">
              <div className="models-div__box__img"><img src={img2} alt="Another Car Model" /></div>
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>BMW</p>
                    <span>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span><CarIcon />&nbsp; BMW</span>
                  <span style={{ textAlign: "right" }}>4/5 &nbsp; <CarIcon /></span>
                  <span><CarIcon />&nbsp; Automatic</span>
                  <span style={{ textAlign: "right" }}>Petrol &nbsp; <CarIcon /></span>
                </div>
                <div className="models-div__box__descr__name-price__btn"><a href="/">Book Ride</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Model;
