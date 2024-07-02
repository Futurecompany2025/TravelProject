import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Img1 from '../../../src/assets/img/gallery/img2.jpg';
import Img2 from '../../../src/assets/img/gallery/2.png';
import Img3 from '../../../src/assets/img/gallery/3.png';
import Img4 from '../../../src/assets/img/gallery/img.jpeg';
import Img5 from '../../../src/assets/img/gallery/img2.jpg';
import Img6 from '../../../src/assets/img/gallery/img3.jpg';
import Img7 from '../../../src/assets/img/gallery/img.jpeg';
import Img8 from '../../../src/assets/img/gallery/img2.jpg';
import './FamilyTrip.css';

const familyTrips = [
  { slug: 'muldai-view-trek', image: Img1, title: 'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'short-annapurna-circuit-trek', image: Img2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'gosainkunda-holy-lake-trek', image: Img3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'annapurna-circuit-tilicho-lake', image: Img4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'short-annapurna-base-camp-trek', image: Img5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'tamang-heritage-trail-trek', image: Img6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-circuit-trek', image: Img7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
];

const FamilyTrip = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="family-trip-section" style={{ backgroundImage: `url(${Img1})` }}>
        <h1>Family Trip</h1>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Family Trips</h2>
        <div className="container">
          <div className="row mt-4">
            {familyTrips.map((item) => (
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
};
export default FamilyTrip;
