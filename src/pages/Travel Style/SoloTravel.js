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
import './SoloTravel.css'; // Ensure you have a CSS file for styling

const soloTrips = [
  { slug: 'annapurna-sanctuary-trek', image: Img1, title: 'Annapurna Sanctuary Trek', duration: '15 Days', price: 'USD 1890' },
  { slug: 'langtang-valley-trek', image: Img2, title: 'Langtang Valley Trek', duration: '12 Days', price: 'USD 1390' },
  { slug: 'everest-base-camp-trek', image: Img3, title: 'Everest Base Camp Trek', duration: '16 Days', price: 'USD 2395' },
  { slug: 'upper-mustang-trek', image: Img4, title: 'Upper Mustang Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'manaslu-circuit-trek', image: Img5, title: 'Manaslu Circuit Trek', duration: '19 Days', price: 'USD 1790' },
  { slug: 'kanchenjunga-base-camp-trek', image: Img6, title: 'Kanchenjunga Base Camp Trek', duration: '21 Days', price: 'USD 1990' },
  { slug: 'annapurna-circuit-trek', image: Img7, title: 'Annapurna Circuit Trek', duration: '18 Days', price: 'USD 1730' },
  { slug: 'langtang-gosaikunda-helambu-trek', image: Img8, title: 'Langtang Gosaikunda Helambu Trek', duration: '17 Days', price: 'USD 1590' },
  { slug: 'pikey-peak-trek', image: Img1, title: 'Pikey Peak Trek', duration: '10 Days', price: 'USD 1290' },
  { slug: 'tamang-heritage-trail-trek', image: Img2, title: 'Tamang Heritage Trail Trek', duration: '7 Days', price: 'USD 890' },
  { slug: 'tilicho-lake-trek', image: Img3, title: 'Tilicho Lake Trek', duration: '14 Days', price: 'USD 1490' },
  { slug: 'dolpo-trek', image: Img4, title: 'Dolpo Trek', duration: '25 Days', price: 'USD 2590' },
  { slug: 'ganesh-himal-trek', image: Img5, title: 'Ganesh Himal Trek', duration: '11 Days', price: 'USD 1190' },
  { slug: 'rolwaling-valley-trek', image: Img6, title: 'Rolwaling Valley Trek', duration: '20 Days', price: 'USD 1890' },
  { slug: 'mustang-royal-trek', image: Img7, title: 'Mustang Royal Trek', duration: '8 Days', price: 'USD 990' },
  { slug: 'gokyo-lakes-trek', image: Img8, title: 'Gokyo Lakes Trek', duration: '13 Days', price: 'USD 1590' },
  { slug: 'everest-three-high-passes-trek', image: Img1, title: 'Everest Three High Passes Trek', duration: '21 Days', price: 'USD 1990' },
  { slug: 'makalu-base-camp-trek', image: Img2, title: 'Makalu Base Camp Trek', duration: '23 Days', price: 'USD 2190' },
  { slug: 'annapurna-panorama-trek', image: Img3, title: 'Annapurna Panorama Trek', duration: '10 Days', price: 'USD 1290' },
  { slug: 'pisang-peak-climbing', image: Img4, title: 'Pisang Peak Climbing', duration: '17 Days', price: 'USD 1690' },
];

const SoloTravel = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="solo-travel-section" style={{ backgroundImage: `url(${Img1})` }}>
        <div className="overlay"></div> {/* Add an overlay for better readability of text */}
        <div className="container">
          <h1>Solo Travel</h1>
          <p>Discover the best destinations for solo travelers.</p>
        </div>
      </div>
      <div className="content-section" style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Solo Trips</h2>
        <div className="container">
          <div className="row mt-4">
            {soloTrips.map((item) => (
              <div key={item.slug} className="col-lg-4 col-md-4 col-sm-6 mb-4"> {/* Adjust grid columns here */}
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

export default SoloTravel;
