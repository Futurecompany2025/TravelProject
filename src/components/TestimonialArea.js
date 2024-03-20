import React from 'react';
function TestimonialArea() {
  return (
    <div className="testimonial-area testimonial-padding" data-background="assets/img/testmonial/testimonial_bg.jpg">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-11 col-lg-11 col-md-9">
            <div className="h1-testimonial-active">
              <div className="single-testimonial text-center">
                <div className="testimonial-caption">
                  <div className="testimonial-top-cap">
                    <img src="assets/img/icon/testimonial.png" alt=""/>
                    <p></p>
                  </div>
                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img src="assets/img/testmonial/Homepage_testi.png" alt=""/>
                    </div>
                    <div className="founder-text">
                      <span>Jessya Inn</span>
                      <p>Co Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more testimonials here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialArea;
