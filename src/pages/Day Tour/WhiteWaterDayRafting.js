import React from 'react';
import Headerbar from '../../components/Headbar'; // Adjusted the path to Headerbar component
import Footer from '../../components/footer'; // Adjusted the path to Footer component
import Navbar from '../../components/navbar';
import './white-water-day-rafting.css'; // Import your custom CSS file here
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
} from '@mui/icons-material'; // Imported necessary icons
import backgroundImage from '../../assets/img/hero/3.jpg'; // Path to your background image

const whiteWaterRaftingDetails = {
  title: 'White Water Day Rafting',
  backgroundImage: backgroundImage,
  price: 'USD 100',
  overview: 'Experience the thrill of white water rafting on one of Nepal’s most popular rivers. Navigate the rapids, enjoy the scenic views, and have an unforgettable adventure.',
  itinerary: [
    'Day 1: Early morning drive from Kathmandu to the rafting starting point',
    'Day 1: Rafting safety briefing and gear preparation',
    'Day 1: Full day rafting adventure with a stop for lunch',
    'Day 1: Return drive to Kathmandu by evening'
  ],
  includes: 'Transport, lunch, rafting guide, safety equipment, and permits.',
  costDates: 'Available year-round, best time is post-monsoon and pre-monsoon seasons.',
  usefulInfo: 'Wear quick-dry clothing and bring a change of clothes and towel.',
  gallery: 'Photos of rafting adventure, rapids, and scenic views.'
};

const WhiteWaterDayRafting = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="rafting-tour-header" style={{ backgroundImage: `url(${whiteWaterRaftingDetails.backgroundImage})` }}>
        <h1>{whiteWaterRaftingDetails.title}</h1>
      </div>
      <div className="rafting-tour-details-wrapper">
        <div className="rafting-tour-column">
          <div className="rafting-tour-item">
            <AttachMoney />
            <span>{whiteWaterRaftingDetails.price}</span>
          </div>
          <div className="rafting-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Water Rafting</span>
          </div>
          <div className="rafting-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Lunch included</span>
          </div>
        </div>
        <div className="rafting-tour-column">
          <div className="rafting-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>Sea level</span>
          </div>
          <div className="rafting-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu</span>
          </div>
          <div className="rafting-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Intermediate</span>
          </div>
        </div>
        <div className="rafting-tour-column">
          <div className="rafting-tour-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Post-monsoon and pre-monsoon seasons</span>
          </div>
        </div>
      </div>
      <div className="details-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('itinerary')}>Itinerary</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
      </div>
      <div className="rafting-tour-content">
        <div className="rafting-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{whiteWaterRaftingDetails.overview}</p>
          </section>
          <section id="itinerary">
            <h2>Itinerary</h2>
            <ul>
              {whiteWaterRaftingDetails.itinerary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{whiteWaterRaftingDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{whiteWaterRaftingDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{whiteWaterRaftingDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{whiteWaterRaftingDetails.gallery}</p>
          </section>
        </div>
        <aside className="rafting-tour-aside">
          <div className="tour-info-box">
            <h2>{whiteWaterRaftingDetails.title}</h2>
            <p>{whiteWaterRaftingDetails.price}</p>
            <button className="book-now-btn">Book Now</button>
            <button className="make-inquiry-btn">Make Inquiry</button>
            <div className="tripadvisor-box">
              <p>RECOMMENDED ON</p>
              <img src="../../assets/img/tripadvisor.png" alt="TripAdvisor" className="tripadvisor-logo" />
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

export default WhiteWaterDayRafting;
