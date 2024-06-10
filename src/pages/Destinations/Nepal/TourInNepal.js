import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../components/navbar';
import Headbar from '../../../components/Headbar';

import Footer from '../../../components/footer';
import Tour1 from '../../../assets/img/hero/Tour/1.jpeg';
import Tour2 from '../../../assets/img/hero/Tour/2.jpg';
import Tour3 from '../../../assets/img/hero/Tour/3.jpeg';
import Tour4 from '../../../assets/img/hero/Tour/4.jpeg';
import Tour5 from '../../../assets/img/hero/Tour/5 .jpg';
import Tour6 from '../../../assets/img/hero/Tour/6.jpg';
import Tour7 from '../../../assets/img/hero/Tour/7.jpg';
import Tour8 from '../../../assets/img/hero/Tour/8.jpg';
import Tour9 from '../../../assets/img/hero/Tour/9.jpg';
import Tour10 from '../../../assets/img/hero/Tour/10.jpg';
import Tour11 from '../../../assets/img/hero/Tour/11.jpg';
import Tour12 from '../../../assets/img/hero/Tour/12.jpg';

import './Nepal.css';
const recommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Tour1, title: 'Kathmandu and Pokhara Tour', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Tour2, title: 'All Nepal Tour', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Tour3, title: 'Best of Nepal Tour', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Tour4, title: 'Muktinath Tour with Jungle Safari', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Tour5, title: 'Upper Mustang Motorcycle Tour', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Tour6, title: '5 UNESCO World Heritage Sites of Kathmandu Day Tour', duration: '1 Day', price: 'USD 110' },
  { slug: 'safari-at-bardia-national-park', image: Tour7, title: 'Safari at Bardia National Park', duration: '18 Days', price: 'USD 1730' },
  { slug: 'kakani-day-hike', image: Tour8, title: 'Kakani Day Hike', duration: '1 Day', price: 'USD 100' },
  { slug: 'white-water-day-rafting', image: Tour9, title: 'White Water Day Rafting', duration: '1 Day', price: 'USD 120' },
  { slug: 'kathmandu-and-patan-day-tour', image: Tour10, title: 'Kathmandu and Patan Day Tour', duration: '1 Day', price: 'USD 80' },
  { slug: 'shivapuri-day-hike', image: Tour11, title: 'Shivapuri Day Hike', duration: '1 Day', price: 'USD 90' },
  { slug: 'kathmandu-and-kirtipur-day-tour', image: Tour12, title: 'Kathmandu and Kirtipur Day Tour', duration: '1 Day', price: 'USD 85' },
 
];

function Nepal() {
  return (
    <>
      <Headbar />
      <Navbar />
      <div className="Tour-section" style={{ backgroundImage: `url(${Tour7})` }}>
        <h1>Tour in Nepal</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Nepal</h2>
        <div className="container">
          <div className="row mt-4">
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
      <Footer />
    </>
  );
}
export default Nepal;

