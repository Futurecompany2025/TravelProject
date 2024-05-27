import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './recommendation.css';
// Import images
import Hero1 from '../assets/img/hero/1.jpg';
import Hero2 from '../assets/img/hero/2.webp';
import Hero3 from '../assets/img/hero/3.jpg';
import Hero4 from '../assets/img/hero/4.jpg';
import Hero5 from '../assets/img/hero/5.jpg';
import Hero6 from '../assets/img/hero/6.jpg';
function Recommendation() {
  const recommendations = [
    { slug: 'three-high-passes-trek', image: Hero1, title: 'Three High Passes Trek', duration: '19 Days', price: 'USD 1790' },
    { slug: 'everest-base-camp-trek', image: Hero2, title: 'Everest Base Camp Trek', duration: '15 Days', price: 'USD 1390' },
    { slug: 'annapurna-panorama-trek', image: Hero3, title: 'Annapurna Panorama Trek', duration: '12 Days', price: 'USD 1040' },
    { slug: 'ultra-luxury-trek-to-everest-base-camp', image: Hero4, title: 'Ultra-Luxury Trek to Everest Base Camp', duration: '13 Days', price: 'USD 5220' },
    { slug: 'upper-mustang-trek', image: Hero5, title: 'Upper Mustang Trek', duration: '16 Days', price: 'USD 2395' },
    { slug: 'everest-base-camp-trek-with-gokyo-lake', image: Hero6, title: 'Everest Base Camp Trek with Gokyo Lake & Cho la pass', duration: '18 Days', price: 'USD 1730' }
  ];
  return (
    <div className="recommendation-container">
      <div className="container">
        <h3 className="site-header">
          <span className="green-text">Our </span>
          <span className="blue-text">Recommendation</span>
        </h3>
      </div>
      <div className="decorative-line"></div>
      <div className="container mt-4">
        <div className="row">
          {recommendations.map((item) => (
            <div key={item.slug} className="col-lg-4 col-md-6 mb-4">
              <Link to={`/${item.slug}`} className="recommendation-link">
                <div className="card">
                  <div className="zoom-image">
                    <img src={item.image} className="card-img-top img-fluid recommendation-image" alt={item.title} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: {item.duration}
                    </p>
                    <div className="price-section">
                      <p className="price">USD <span className="blue-text">{item.price.split(' ')[1]}</span></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Recommendation;
