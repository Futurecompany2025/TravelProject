import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../components/navbar';
import Headbar from '../../../components/Headbar';
import Footer from '../../../components/footer';
import Peak1 from '../../../assets/img/hero/Peak/1.jpg';
import Peak2 from '../../../assets/img/hero/Peak/2.jpg';
import Peak3 from '../../../assets/img/hero/Peak/3.jpeg';
import Peak4 from '../../../assets/img/hero/Peak/4.jpeg';
import Peak5 from '../../../assets/img/hero/Peak/5.jpeg';
import Peak6 from '../../../assets/img/hero/Peak/6.jpeg';
const recommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Peak1, title: 'Kyajo Ri Peak climbing', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Peak2, title: 'Island Peak Climbing with Everest Base Camp', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Peak3, title: 'Mera Peak and Island peak Climbing via Amphu Laptsa pass', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Peak4, title: 'Island peak Climbing', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Peak5, title: 'Mera Peak Climbing', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Peak6, title: 'Lobuche Peak Climbing', duration: '1 Day', price: 'USD 110' }
];
function Nepal() {
  return (
    <>
      <Headbar />
      <Navbar />
      <div className="Peak-section" style={{ backgroundImage: `url(${Peak6})` }}>
        <h1>Peak Climbing In Nepal</h1>
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


