import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Luxury/2.jpeg';
import './muktinathHelicopter.css';

const muktinathTourDetails = {
  title: 'Muktinath Helicopter Tour',
  backgroundImage: backgroundImage,
  price: 'USD 1200',
  overview: 'Experience a breathtaking helicopter tour to Muktinath...',
  itinerary: [
    'Day 1: Departure from Pokhara to Muktinath',
    'Day 1: Visit Muktinath Temple and surrounding area',
    'Day 1: Return flight to Pokhara by evening'
  ],
  includes: 'Helicopter ride, all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Please bring warm clothing and your camera.',
  gallery: 'Scenic views of the Himalayas and the Muktinath area.'
};

const MuktinathHelicopterTour = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="muktinath-tour-header" style={{ backgroundImage: `url(${muktinathTourDetails.backgroundImage})` }}>
        <h1>{muktinathTourDetails.title}</h1>
      </div>
      <div className="muktinath-tour-details-wrapper">
        <div className="muktinath-tour-column">
          <div className="muktinath-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{muktinathTourDetails.price}</span>
          </div>
          <div className="muktinath-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Helicopter Tour</span>
          </div>
          <div className="muktinath-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>No meals provided</span>
          </div>
        </div>
        <div className="muktinath-tour-column">
          <div className="muktinath-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>3,710m/12,172ft</span>
          </div>
          <div className="muktinath-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Pokhara/Pokhara</span>
          </div>
          <div className="muktinath-tour-item">
            <LocationOn />
            <span>Distance:</span>
            <span>Approx 90 KM round trip</span>
          </div>
        </div>
        <div className="muktinath-tour-column">
          <div className="muktinath-tour-item">
            <Flight />
            <span>Transportation:</span>
            <span>Helicopter</span>
          </div>
          <div className="muktinath-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Easy to Moderate</span>
          </div>
          <div className="muktinath-tour-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>N/A</span>
          </div>
        </div>
        <div className="muktinath-tour-column">
          <div className="muktinath-tour-item">
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
      <div className="muktinath-tour-content">
        <div className="muktinath-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{muktinathTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{muktinathTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{muktinathTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{muktinathTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{muktinathTourDetails.gallery}</p>
          </section>
        </div>
        <aside className="muktinath-tour-aside">
          <div className="tour-info-box">
            <h2>{muktinathTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{muktinathTourDetails.price}</span></p>
            <button className="book-now-btn">Book Now</button>
            <button className="make-inquiry-btn">Make Inquiry</button>
            <div className="tripadvisor-box">
              <p>RECOMMENDED ON</p>
              <img src="path/to/tripadvisor-logo.png" alt="TripAdvisor" />
              <p>J One Trekking And Expedition</p>
            </div>
            <div className="contact-box">
              <h3>Speak to Expert</h3>
              <p><span role="img" aria-label="Nepal">🇳🇵</span> Nepal: +9779860915040</p>
              <p><span role="img" aria-label="Netherland">🇺🇸</span> Netherland: +31 6 37404922</p>
              <p><span role="img" aria-label="Australia">🇬🇧</span> Australia: +61 418 768 278</p>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default MuktinathHelicopterTour;
