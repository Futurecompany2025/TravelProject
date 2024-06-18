import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar'; // Adjusted the path
import Footer from '../../components/footer'; // Adjusted the path
import './helicopter.css';
import {
  AttachMoney,
  DirectionsWalk,
  CalendarToday,
  Height,
  LocationOn,
  Flight,
  Grade,
  Hotel,
  DateRange
} from '@mui/icons-material';

// Add the hero image for this tour
const backgroundImage = require('../../assets/img/hero/Tour/2.jpg').default;

const helicopterTourDetails = {
  title: 'Helicopter Tour to Everest Base Camp Day Tour',
  backgroundImage: backgroundImage,
  price: 'USD 1200',
  overview: 'Experience the majestic Everest region in a single day with our Helicopter Tour to Everest Base Camp. Enjoy the breathtaking views of the Himalayas and the thrill of landing at the base camp of the world’s highest peak.',
  itinerary: [
    'Day 1: Early morning flight from Kathmandu to Lukla',
    'Day 1: Fly from Lukla to Everest Base Camp, enjoy views and quick stop',
    'Day 1: Fly to Syangboche for breakfast with panoramic views',
    'Day 1: Return flight to Kathmandu by afternoon'
  ],
  includes: 'Helicopter ride, breakfast at Syangboche, all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Please bring warm clothing and your camera.',
  gallery: 'Beautiful views from the helicopter and at Everest Base Camp.',
};

const HelicopterTourToEverestBaseCamp = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="helicopter-tour-header" style={{ backgroundImage: `url(${helicopterTourDetails.backgroundImage})` }}>
        <h1>{helicopterTourDetails.title}</h1>
      </div>
      <div className="helicopter-tour-details-wrapper">
        <div className="helicopter-tour-column">
          <div className="helicopter-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{helicopterTourDetails.price}</span>
          </div>
          <div className="helicopter-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Helicopter Tour</span>
          </div>
          <div className="helicopter-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Breakfast at Syangboche</span>
          </div>
        </div>
        <div className="helicopter-tour-column">
          <div className="helicopter-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>5,364m/17,598ft</span>
          </div>
          <div className="helicopter-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
          <div className="helicopter-tour-item">
            <Flight />
            <span>Transportation:</span>
            <span>Helicopter</span>
          </div>
        </div>
        <div className="helicopter-tour-column">
          <div className="helicopter-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Easy</span>
          </div>
          <div className="helicopter-tour-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>N/A</span>
          </div>
          <div className="helicopter-tour-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, weather permitting</span>
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
      <div className="helicopter-tour-content">
        <div className="helicopter-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{helicopterTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{helicopterTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{helicopterTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{helicopterTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{helicopterTourDetails.gallery}</p>
          </section>
        </div>
        <aside className="helicopter-tour-aside">
          <div className="tour-info-box">
            <h2>{helicopterTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{helicopterTourDetails.price}</span></p>
            <button className="book-now-btn">Book Now</button>
            <button className="make-inquiry-btn">Make Inquiry</button>
            <div className="tripadvisor-box">
              <p>RECOMMENDED ON</p>
              <img src="path/to/tripadvisor-logo.png" alt="TripAdvisor" />
              <p>Trek Ways Nepal</p>
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

export default HelicopterTourToEverestBaseCamp;