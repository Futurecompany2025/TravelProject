import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './recommendation.css';

// Import images
import Hero1 from '../assets/img/hero/1.jpg';
import Hero2 from '../assets/img/hero/1.jpg';
import Hero3 from '../assets/img/hero/1.jpg';
import Hero4 from '../assets/img/hero/1.jpg';
import Hero5 from '../assets/img/hero/1.jpg';
import Hero6 from '../assets/img/hero/1.jpg';

function Recommendation() {
  return (
    <div style={{ backgroundColor: '#e8ebf3', minHeight: '100vh' }}>
      <div className="container">
        <h3 className="site-header">
          <span className="green-text">Our </span>
          <span className="blue-text">Recommendation</span>
        </h3>
        <div className="decorative-line"></div> 
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="zoom-image">
                <img src={Hero1} className="card-img-top img-fluid" alt="Hero 1" />
              </div>
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
              <div className="zoom-image">
                <img src={Hero2} className="card-img-top img-fluid" alt="Hero 2" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Everest Base Camp Trek</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 15 Days
                </p>
                <p className="text-end">USD 1390</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="zoom-image">
                <img src={Hero3} className="card-img-top img-fluid" alt="Hero 3" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Annapurna Panorama Trek</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 12 Days
                </p>
                <p className="text-end">USD 1040</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="zoom-image">
                <img src={Hero4} className="card-img-top img-fluid" alt="Hero 4" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Ultra-Luxury Trek to Everest Base Camp</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 13 Days
                </p>
                <p className="text-end">USD 5220</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="zoom-image">
                <img src={Hero5} className="card-img-top img-fluid" alt="Hero 5" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Upper Mustang Trek</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 16 Days
                </p>
                <p className="text-end">USD 2395</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="zoom-image">
                <img src={Hero6} className="card-img-top img-fluid" alt="Hero 6" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Everest Base Camp Trek with Gokyo Lake & Cho la pass</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: 18 Days
                </p>
                <p className="text-end">USD 1730</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
