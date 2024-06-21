import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './AnnapurnaBaseCampHelicopter.css';
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/1.jpg';
const annapurnaTourDetails = {
  title: 'Annapurna Base Camp Helicopter Tour',
  backgroundImage: backgroundImage,
  price: 'USD 1000',
  overview: 'Join us for an unforgettable helicopter tour to Annapurna Base Camp...',
  itinerary: [
    'Day 1: Early morning flight from Pokhara to Annapurna Base Camp',
    'Day 1: Explore and enjoy the panoramic views at Annapurna Base Camp',
    'Day 1: Return flight to Pokhara by afternoon'
  ],
  includes: 'Helicopter ride, all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Please bring warm clothing and your camera.',
  gallery: 'Stunning views of the Annapurna range and the helicopter tour.'
};

const AnnapurnaBaseCampHelicopter = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleMakeInquiry = () => {
    // Logic for handling inquiry button click
    alert('You clicked Make Inquiry button!');
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="annapurna-tour-header" style={{ backgroundImage: `url(${annapurnaTourDetails.backgroundImage})` }}>
        <h1>{annapurnaTourDetails.title}</h1>
      </div>
      <div className="annapurna-tour-details-wrapper">
        <div className="annapurna-tour-column">
          <div className="annapurna-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{annapurnaTourDetails.price}</span>
          </div>
          <div className="annapurna-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Helicopter Tour</span>
          </div>
          <div className="annapurna-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>No meals provided</span>
          </div>
        </div>
        <div className="annapurna-tour-column">
          <div className="annapurna-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>4,130m/13,550ft</span>
          </div>
          <div className="annapurna-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Pokhara/Pokhara</span>
          </div>
          <div className="annapurna-tour-item">
            <LocationOn />
            <span>Distance:</span>
            <span>Approx 210 KM round trip</span>
          </div>
        </div>
        <div className="annapurna-tour-column">
          <div className="annapurna-tour-item">
            <Flight />
            <span>Transportation:</span>
            <span>Helicopter</span>
          </div>
          <div className="annapurna-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Moderate</span>
          </div>
          <div className="annapurna-tour-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>N/A</span>
          </div>
        </div>
        <div className="annapurna-tour-column">
          <div className="annapurna-tour-item">
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
      <div className="annapurna-tour-content">
        <div className="annapurna-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{annapurnaTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{annapurnaTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{annapurnaTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{annapurnaTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{annapurnaTourDetails.gallery}</p>
          </section>
        </div>
        <aside className="annapurna-tour-aside">
          <div className="tour-info-box">
            <h2>{annapurnaTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{annapurnaTourDetails.price}</span></p>
            <button className="book-now-btn" onClick={() => scrollToSection('form-section')}>Book Now</button>
            <button className="make-inquiry-btn" onClick={handleMakeInquiry}>Make Inquiry</button>
            <div className="tripadvisor-box">
              <p>RECOMMENDED ON</p>
              <img src="path/to/tripadvisor-logo.png" alt="TripAdvisor" />
              <p>J One Trekking And Expedition</p>
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
export default AnnapurnaBaseCampHelicopter;
