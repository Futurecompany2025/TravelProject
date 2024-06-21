import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar'; // Adjusted the path
import Footer from '../../components/footer'; // Adjusted the path
import './unesco-world-heritage-sites.css';
import {
  AttachMoney,
  DirectionsWalk,
  CalendarToday,
  Height,
  LocationOn,
  Grade,
  DateRange
} from '@mui/icons-material';

// Add the hero image for this tour
const backgroundImage = require('../../assets/img/hero/Tour/2.jpg').default;

const unescoSitesDetails = {
  title: '5 UNESCO World Heritage Sites',
  backgroundImage: backgroundImage,
  price: 'Price varies by site',
  overview: 'Explore the cultural and historical richness of these UNESCO World Heritage Sites. Each site represents a unique aspect of human civilization and natural wonder.',
  includes: 'Transportation, guide fees, and entrance fees.',
  costDates: 'Available year-round, specific dates vary by site.',
  usefulInfo: 'Wear comfortable shoes, bring a camera, and respect local customs.',
  gallery: 'Photos showcasing the beauty and historical significance of each site.'
};

const UNESCOWorldHeritageSites = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="unesco-tour-header" style={{ backgroundImage: `url(${unescoSitesDetails.backgroundImage})` }}>
        <div className="container">
          <h1 className="text-white text-center">{unescoSitesDetails.title}</h1>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <AttachMoney />
                <span className="fw-bold">Price starts from</span>
                <span>{unescoSitesDetails.price}</span>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <DirectionsWalk />
                <span className="fw-bold">Activity:</span>
                <span>Exploration</span>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <CalendarToday />
                <span className="fw-bold">Meal:</span>
                <span>No meals provided</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <Height />
                <span className="fw-bold">Max Altitude:</span>
                <span>Varies by site</span>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <LocationOn />
                <span className="fw-bold">Start & End Point:</span>
                <span>Varies by site</span>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <Grade />
                <span className="fw-bold">Trip Grade:</span>
                <span>Easy to Moderate</span>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <DateRange />
                <span className="fw-bold">Best Time:</span>
                <span>Year-round, best in spring and autumn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-scroll-box">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
              <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
              <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
              <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
              <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <section id="overview">
              <h2 className="mb-3">Overview</h2>
              <p>{unescoSitesDetails.overview}</p>
            </section>
            <section id="includes">
              <h2 className="mb-3">Includes</h2>
              <p>{unescoSitesDetails.includes}</p>
            </section>
            <section id="cost-dates">
              <h2 className="mb-3">Cost & Dates</h2>
              <p>{unescoSitesDetails.costDates}</p>
            </section>
            <section id="useful-info">
              <h2 className="mb-3">Useful Info</h2>
              <p>{unescoSitesDetails.usefulInfo}</p>
            </section>
            <section id="gallery">
              <h2 className="mb-3">Gallery</h2>
              <p>{unescoSitesDetails.gallery}</p>
            </section>
          </div>
          <div className="col-md-4">
            <aside className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">{unescoSitesDetails.title}</h2>
                <p>Price starts from <span className="fw-bold tour-price">{unescoSitesDetails.price}</span></p>
                <button className="btn btn-primary d-block mb-2">Book Now</button>
                <button className="btn btn-secondary d-block">Make Inquiry</button>
                <div className="tripadvisor-box mt-3">
                  <p>RECOMMENDED ON</p>
                  <img src="path/to/tripadvisor-logo.png" alt="TripAdvisor" className="img-fluid" />
                  <p>Your Company Name</p>
                </div>
                <div className="contact-box mt-3">
                  <h3>Speak to Expert</h3>
                  <p><span role="img" aria-label="Nepal">🇳🇵</span> Nepal: +977 9841666232</p>
                  <p><span role="img" aria-label="USA">🇺🇸</span> USA: +1 651-703-8181</p>
                  <p><span role="img" aria-label="UK">🇬🇧</span> UK: +44 7946748780</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UNESCOWorldHeritageSites;
