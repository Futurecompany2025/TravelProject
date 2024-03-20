import React from 'react';
import backgroundImage from '../assets/img/hero/h1_hero.jpg';
function HeroSlider() {
  return (
    <div className="slider-area">
      <div className="slider-active">
      <div className="single-slider hero-overly slider-height d-flex align-items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-9">
                <div className="hero__caption">
                <h1 style={{ whiteSpace: 'nowrap' }}>Welcome To J1 Trekking </h1>
                <p style={{ color: 'yellow', fontWeight: 'bold' }}>Plan Your Next Tour! Where would you like to go?</p>
                </div>
              </div>
            </div>
            {/* Search Box */}
            <div className="row">
              <div className="col-xl-12">
                <form action="#" className="search-box">
                  <div className="input-form mb-30">
                    <input type="text" placeholder="When Would you like to go ?" />
                  </div>
                  <div className="select-form mb-30">
                    <div className="select-itms">
                      <select name="select" id="select1">
                        <option value="">When</option>
                        <option value="">Services-1</option>
                        <option value="">Services-2</option>
                        <option value="">Services-3</option>
                      </select>
                    </div>
                  </div>
                  <div className="search-form mb-30">
                    <a href="#">Search</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSlider;
