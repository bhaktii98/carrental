import React from 'react';
import img1 from '../Assets/team/1.png'
import img2 from '../Assets/team/2.png'
import img3 from '../Assets/team/3.png'
import img4 from '../Assets/team/4.png'
import img5 from '../Assets/team/5.png'
import img6 from '../Assets/team/6.png'
import '../css/Team.css'

export default function Team() {
  return (
    <div>
      <main className="team-page">
        <section className="hero-pages">
          <div className="hero-pages__overlay"></div>
          <div className="container">
            <div className="hero-pages__text">
              <h3>Our Team</h3>
              <p><a href="../index.html">Home</a> / Our Team</p>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="team-container">
            <div className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={img1} alt="Luke Miller" />
              </div>
              <div className="team-container__box__descr">
                <h3>Luke Miller</h3>
                <p>Salesman</p>
              </div>
            </div>
            <div className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={img2} alt="Michael Diaz" />
              </div>
              <div className="team-container__box__descr">
                <h3>Michael Diaz</h3>
                <p>Business Owner</p>
              </div>
            </div>
            <div className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={img3} alt="Briana Rossr" />
              </div>
              <div className="team-container__box__descr">
                <h3>Briana Rossr</h3>
                <p>Photographer</p>
              </div>
            </div>
            <div className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={img4} alt="Lauren Rivera" />
              </div>
              <div className="team-container__box__descr">
                <h3>Lauren Rivera</h3>
                <p>Car Detailist</p>
              </div>
            </div>
            <div className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={img5} alt="Martin Rizz" />
              </div>
              <div className="team-container__box__descr">
                <h3>Martin Rizz</h3>
                <p>Mechanic</p>
              </div>
            </div>
            <div className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={img6} alt="Caitlyn Hunt" />
              </div>
              <div className="team-container__box__descr">
                <h3>Caitlyn Hunt</h3>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
