import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/img/destinations/nepal.jpeg';
import service2 from '../assets/img/destinations/bhutan.jpg';
import service3 from '../assets/img/destinations/tibet.jpg';
import service4 from '../assets/img/destinations/india.jpg';
import './Destinations.css'; // Import the CSS file

function Destinations() {
  return (
    <div className="favourite-place place-padding" style={{ backgroundColor: '#e8ebf3' }}>
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
          {[
            { to: '/nepal', img: service1, alt: 'Nepal', text: 'Explore Nepal' },
            { to: '/bhutan', img: service2, alt: 'Bhutan', text: 'Explore Bhutan' },
            { to: '/tibet', img: service3, alt: 'Tibet', text: 'Explore Tibet' },
            { to: '/india', img: service4, alt: 'India', text: 'Explore India' }
          ].map((destination, index) => (
            <div className="col-md-6" key={index}>
              <div className="single-place mb-30">
                <div className="place-img position-relative">
                  <Link to={destination.to}>
                    <img src={destination.img} alt={destination.alt} className="img-fluid rounded" />
                    <div className="destination-text">{destination.text}</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
