import React from 'react';

function SupportCompanyArea() {
  return (
    <div className="support-company-area support-padding fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="support-location-img mb-50">
              <img src="assets/img/service/support-img.jpg" alt=""/>
              <div className="support-img-cap">
                <span>Since 1992</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              <div className="section-tittle section-tittle2">
                <span>About Our Company</span>
                <h2>We are Go Trip <br/>Travels Support Company</h2>
              </div>
              <div className="support-caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <div className="select-suport-items">
                  <label className="single-items">Lorem ipsum dolor sit amet
                    <input type="checkbox" checked="checked active"/>
                    <span className="checkmark"></span>
                  </label>
                  {/* Add more support items here */}
                </div>
                <a href="#" className="btn border-btn">About us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportCompanyArea;
