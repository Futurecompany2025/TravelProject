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
import './ReligiousTravel.css'; // Ensure you have a CSS file for styling

const religiousTrips = [
  { slug: 'kailash-mansarovar-yatra', image: Img1, title: 'Kailash Mansarovar Yatra', duration: '21 Days', price: 'USD 3990' },
  { slug: 'char-dham-yatra', image: Img2, title: 'Char Dham Yatra', duration: '15 Days', price: 'USD 2790' },
  { slug: 'amarnath-yatra', image: Img3, title: 'Amarnath Yatra', duration: '7 Days', price: 'USD 1490' },
  { slug: 'golden-temple-tour', image: Img4, title: 'Golden Temple Tour', duration: '5 Days', price: 'USD 990' },
  { slug: 'vaishno-devi-yatra', image: Img5, title: 'Vaishno Devi Yatra', duration: '4 Days', price: 'USD 790' },
  { slug: 'tirupati-balaji-darshan', image: Img6, title: 'Tirupati Balaji Darshan', duration: '2 Days', price: 'USD 490' },
  { slug: 'rishikesh-haridwar-tour', image: Img7, title: 'Rishikesh Haridwar Tour', duration: '3 Days', price: 'USD 590' },
  { slug: 'varanasi-ghats-tour', image: Img8, title: 'Varanasi Ghats Tour', duration: '4 Days', price: 'USD 690' },
  { slug: 'puri-jagannath-darshan', image: Img1, title: 'Puri Jagannath Darshan', duration: '3 Days', price: 'USD 590' },
  { slug: 'shirdi-sai-baba-darshan', image: Img2, title: 'Shirdi Sai Baba Darshan', duration: '2 Days', price: 'USD 490' },
  { slug: 'badrinath-kedarnath-yatra', image: Img3, title: 'Badrinath Kedarnath Yatra', duration: '10 Days', price: 'USD 1790' },
  { slug: 'hemkund-sahib-yatra', image: Img4, title: 'Hemkund Sahib Yatra', duration: '6 Days', price: 'USD 1190' },
];

const ReligiousTravel = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="religious-travel-section" style={{ backgroundImage: `url(${Img1})` }}>
        <div className="overlay"></div> {/* Add an overlay for better readability of text */}
        <div className="container">
          <h1>Religious Travel</h1>
          <p>Join our religious travel packages and visit sacred sites.</p>
        </div>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Religious Trips</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4"> {/* Adjust grid columns here */}
            {religiousTrips.map((item) => (
              <div key={item.slug} className="col mb-4">
                <Link to={`/${item.slug}`} className="recommendation-link">
                  <div className="card h-100">
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

export default ReligiousTravel;
