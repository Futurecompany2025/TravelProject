import React from 'react';

function OurServices() {
  return (
    <div className="our-services servic-padding">
      <div className="container">
        <div className="row d-flex justify-contnet-center">
          {/* Service 1 */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-tour"></span>
              </div>
              <div className="services-cap">
                <h5>8000+ Our Local<br/>Guides</h5>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-pay"></span>
              </div>
              <div className="services-cap">
                <h5>100% Trusted Tour<br/>Agency</h5>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-experience"></span>
              </div>
              <div className="services-cap">
                <h5>28+ Years of Travel<br/>Experience</h5>
              </div>
            </div>
          </div>
          {/* Service 4 */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-good"></span>
              </div>
              <div className="services-cap">
                <h5>98% Our Travelers<br/>are Happy</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
