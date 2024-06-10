// src/components/Destinations.js
import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/img/destinations/nepal.jpeg';
import service2 from '../assets/img/destinations/bhutan.jpg';
import service3 from '../assets/img/destinations/tibet.jpg';
import service4 from '../assets/img/destinations/india.jpg';

function Destinations() {
  return (
    <div style={{ backgroundColor: '#e8ebf3' }} className="favourite-place place-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>FEATURED Places</span>
              <h2>Our Destinations</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="single-place mb-30" style={{ height: '450px' }}>
              <div className="place-img position-relative">
                <Link to="/nepal">
                  <img style={{ height: '100%', borderRadius: '25px' }} src={service1} alt="Nepal" />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#ff7f0e', fontSize: '3em', fontWeight: '500' }}>Explore Nepal</div>
                </Link>
              </div>
            </div>
            <div className="single-place mb-30" style={{ height: '450px' }}>
              <div className="place-img position-relative">
                <Link to="/bhutan">
                  <img style={{ height: '100%', borderRadius: '25px' }} src={service2} alt="Bhutan" />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#ff7f0e', fontSize: '3em', fontWeight: '500' }}>Explore Bhutan</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-place mb-30" style={{ height: '450px' }}>
              <div className="place-img position-relative">
                <Link to="/tibet">
                  <img style={{ height: '100%', borderRadius: '25px' }} src={service3} alt="Tibet" />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#ff7f0e', fontSize: '3em', fontWeight: '500' }}>Explore Tibet</div>
                </Link>
              </div>
            </div>
            <div className="single-place mb-30" style={{ height: '450px' }}>
              <div className="place-img position-relative">
                <Link to="/india">
                  <img style={{ height: '100%', borderRadius: '25px' }} src={service4} alt="India" />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#ff7f0e', fontSize: '3em', fontWeight: '500' }}>Explore India</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
