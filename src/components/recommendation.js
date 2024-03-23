import React from 'react';
import Hero1 from '../assets/img/hero/1.jpg';
import Hero2 from '../assets/img/hero/1.jpg';
import Hero3 from '../assets/img/hero/1.jpg';
import Hero4 from '../assets/img/hero/1.jpg';
import Hero5 from '../assets/img/hero/1.jpg';
import Hero6 from '../assets/img/hero/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
function Recommendation() {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">OUR Recommendations</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={Hero1} className="card-img-top img-fluid" alt="Hero 1" />
            <div className="card-body">
              <h5 className="card-title">Three High Passes Trek</h5>
              <p className="card-text">
                <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 19 Days
              </p>
              <p className="text-end">USD 1790</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={Hero2} className="card-img-top img-fluid" alt="Hero 2" />
            <div className="card-body">
              <h5 className="card-title">Everest Base Camp Trek</h5>
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 15 Days
              <p className="text-end">USD 1390</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={Hero3} className="card-img-top img-fluid" alt="Hero 3" />
            <div className="card-body">
              <h5 className="card-title">Annapurna Panorama Trek</h5>
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration 12 Days
              <p className="text-end">USD 1040</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={Hero4} className="card-img-top img-fluid" alt="Hero 4" />
            <div className="card-body">
              <h5 className="card-title">Ultra- Luxury Trek to Everest Base Camp</h5>
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration 13 Days
              <p className="text-end">USD 5220</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={Hero5} className="card-img-top img-fluid" alt="Hero 5" />
            <div className="card-body">
              <h5 className="card-title">Upper Mustang Trek</h5>
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration 16 Days
              <p className="text-end">USD 2395</p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={Hero6} className="card-img-top img-fluid" alt="Hero 6" />
            <div className="card-body">
              <h5 className="card-title">Everest Base Camp Trek with Gokyo Lake & Cho la pass</h5>
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration 18 Days
              <p className="text-end">USD 1730</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;