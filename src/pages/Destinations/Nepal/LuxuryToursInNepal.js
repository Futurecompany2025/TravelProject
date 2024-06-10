import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../components/navbar';
import Headbar from '../../../components/Headbar';
import Footer from '../../../components/footer';
import Luxury2 from '../../../assets/img/hero/Luxury/2.jpeg';
import Luxury3 from '../../../assets/img/hero/Luxury/3.jpeg';
import Luxury4 from '../../../assets/img/hero/Luxury/4.jpg';
import Luxury5 from '../../../assets/img/hero/Luxury/5.jpeg';
import Luxury6 from '../../../assets/img/hero/Luxury/6.jpg';
import Luxury7 from '../../../assets/img/hero/Luxury/7.jpg';
const recommendations = [
  { slug: 'kathmandu-and-pokhara-tour', image: Luxury2, title: 'Muktinath Helicopter Tour', duration: '19 Days', price: 'USD 1790' },
  { slug: 'all-nepal-tour', image: Luxury3, title: 'Luxury Trek To Annapurna', duration: '15 Days', price: 'USD 1390' },
  { slug: 'best-of-nepal-tour', image: Luxury4, title: 'Exquisite Nepal Luxury Tour', duration: '12 Days', price: 'USD 1040' },
  { slug: 'muktinath-tour-with-jungle-safari', image: Luxury5, title: 'Annapurna Base Camp Helicopter Tour', duration: '13 Days', price: 'USD 5220' },
  { slug: 'upper-mustang-motorcycle-tour', image: Luxury6, title: 'Langtang Helicopter Tour', duration: '16 Days', price: 'USD 2395' },
  { slug: '5-un', image: Luxury7, title: 'Helicopter Tour to Everest Base Camp', duration: '1 Day', price: 'USD 110' }
];
function Nepal() {
  return (
    <>
      <Headbar />
      <Navbar />
      <div className="Luxury-section" style={{ backgroundImage: `url(${Luxury7})` }}>
        <h1>Luxury Tours in Nepal</h1>
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


