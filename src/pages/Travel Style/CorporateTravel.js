<<<<<<< HEAD
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
import './corporatetrips.css';
const corporateTrips = [
  { slug: 'muldai-view-trek', image: Img1, title: 'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'short-annapurna-circuit-trek', image: Img2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'gosainkunda-holy-lake-trek', image: Img3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'annapurna-circuit-tilicho-lake', image: Img4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'short-annapurna-base-camp-trek', image: Img5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'tamang-heritage-trail-trek', image: Img6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-circuit-trek', image: Img7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
];
const CorporateTravel = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="corporate-travel-section" style={{ backgroundImage: `url(${Img1})` }}>
        <div className="overlay"></div> {/* Add an overlay for better readability of text */}
        <div className="container">
          <h1>Corporate Travel</h1>
          <p>Explore our corporate travel solutions for your business needs.</p>
        </div>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Corporate Trips</h2>
        <div className="container">
          <div className="row mt-4">
            {corporateTrips.map((item) => (
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
export default CorporateTravel;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb } from 'react-bootstrap';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Img1 from '../../../src/assets/img/gallery/img3.jpg';
import Img2 from '../../../src/assets/img/gallery/img2.jpg';
import Img3 from '../../../src/assets/img/gallery/img2.jpg';
import Img4 from '../../../src/assets/img/gallery/Tilicholake.jpg';
import Img5 from '../../../src/assets/img/gallery/basecamp.jfif';
import Img6 from '../../../src/assets/img/gallery/img3.jpg';
import Img7 from '../../../src/assets/img/gallery/circuittrek.jfif';
import Img8 from '../../../src/assets/img/gallery/mardihimal.jpg';
import './corporatetrips.css';

const corporateTrips = [
  { slug: 'muldai-view-trek', image: Img1, title: 'Muldai View Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'short-annapurna-circuit-trek', image: Img2, title: 'Short Annapurna Circuit Trek', duration: '15 Days', price: 'USD 1390' },
  { slug: 'gosainkunda-holy-lake-trek', image: Img3, title: 'Gosainkunda Holy Lake Trek Via Langtang Valley', duration: '12 Days', price: 'USD 1040' },
  { slug: 'annapurna-circuit-tilicho-lake', image: Img4, title: 'Annapurna Circuit Trek with Tilicho Lake', duration: '13 Days', price: 'USD 5220' },
  { slug: 'short-annapurna-base-camp-trek', image: Img5, title: 'Short Annapurna Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'tamang-heritage-trail-trek', image: Img6, title: 'Tamang Heritage Trail Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'annapurna-circuit-trek', image: Img7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'mardi-himal-trek', image: Img8, title: 'Mardi Himal Trek from Pokhara', duration: '18 Days', price: 'USD 1730' },
];

const CorporateTravel = () => {
  return (
    <>
      <Headerbar />
      <Navbar />

      <div
        className="corporate-travel-section"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        {/* Overlay for better readability */}
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        ></div>

        {/* Content Container */}
        <div
          className="container text-center"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>Corporate Travel</h1>
          
          {/* Breadcrumb positioned below the text */}
          <Breadcrumb
            className="d-flex justify-content-center mt-3"
            style={{ background: 'transparent', padding: '0', margin: '0', fontSize: '1rem', color: '#ccc' }}
          >
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} style={{ color: 'white' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active style={{ color: 'white' }}>
              Corporate Travel
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4">
          {corporateTrips.map((item) => (
            <div key={item.slug} className="col-lg-4 col-md-6 mb-4">
              <Link to={`/${item.slug}`} className="recommendation-link text-decoration-none">
                <div className="card h-100">
                  <div className="zoom-image">
                    <img
                      src={item.image}
                      className="card-img-top img-fluid recommendation-image"
                      alt={item.title}
                      style={{ transition: 'transform 0.3s', objectFit: 'cover', height: '200px' }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" /> Duration: {item.duration}
                    </p>
                    <div className="price-section">
                      <p className="price">
                        USD <span className="blue-text">{item.price.split(' ')[1]}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CorporateTravel;
>>>>>>> e8a3bcc (Initial commit on shikhar branch)
