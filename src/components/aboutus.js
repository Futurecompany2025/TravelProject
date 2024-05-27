import React from 'react';
import './aboutus.css';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className="support-company-area support-padding fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              <div className="section-tittle section-tittle2">
                <h2>About Us</h2>
              </div>
              <div className="support-caption">
                <p>
                  J1 Trekking Pvt. Ltd. is a team of experienced and passionate people. We have started our career from the root level so we know what we are offering to our valued clients. We can help you plan hassle-free Trekking packages, Peak Climbing, Expeditions, Cultural Tours, Biking Tours, Yoga and meditation, Jungle Safari Tours, Rafting Tours, and Helicopter Tours with the best prices and value for your upcoming trip to the Himalayas.
                </p>
                <p>
                  With the experience of 23 years, we are ready to help you design your package as per your requirements. Every one of our packages is truly tailor-made, and our expert team has designed it for all ages, groups, families, and even solo travelers. We let you choose your package and leave you freedom.
                </p>
                <Link to="/about-us" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;