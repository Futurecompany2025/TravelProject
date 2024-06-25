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
        <h1>{unescoSitesDetails.title}</h1>
      </div>
      <div className="unesco-tour-details-wrapper">
        <div className="unesco-tour-column">
          <div className="unesco-tour-item">
            <AttachMoney />
            <span>Price varies by site</span>
          </div>
          <div className="unesco-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Exploration</span>
          </div>
          <div className="unesco-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>No meals provided</span>
          </div>
        </div>
        <div className="unesco-tour-column">
          <div className="unesco-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>Varies by site</span>
          </div>
          <div className="unesco-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Varies by site</span>
          </div>
          <div className="unesco-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Easy to Moderate</span>
          </div>
        </div>
        <div className="unesco-tour-column">
          <div className="unesco-tour-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, best in spring and autumn</span>
          </div>
        </div>
      </div>
      <div className="details-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
      </div>
      <div className="unesco-tour-content">
        <div className="unesco-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{unescoSitesDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{unescoSitesDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{unescoSitesDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{unescoSitesDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{unescoSitesDetails.gallery}</p>
          </section>
        </div>
        <aside className="unesco-tour-aside">
          <div className="tour-info-box">
            <h2>{unescoSitesDetails.title}</h2>
            <p>Price varies by site</p>
            <button className="book-now-btn">Book Now</button>
            <button className="make-inquiry-btn">Make Inquiry</button>
            <div className="tripadvisor-box">
              <p>RECOMMENDED ON</p>
              <img src="path/to/tripadvisor-logo.png" alt="TripAdvisor" />
              <p>Your Company Name</p>
            </div>
            <div className="contact-box">
              <h3>Speak to Expert</h3>
              <p><span role="img" aria-label="Nepal">🇳🇵</span> Nepal: +977 9841666232</p>
              <p><span role="img" aria-label="USA">🇺🇸</span> USA: +1 651-703-8181</p>
              <p><span role="img" aria-label="UK">🇬🇧</span> UK: +44 7946748780</p>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default UNESCOWorldHeritageSites;
