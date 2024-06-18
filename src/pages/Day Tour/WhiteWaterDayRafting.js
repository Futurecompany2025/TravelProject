import React from 'react';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import './white-water-day-rafting.css';
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
import backgroundImage from '../../assets/img/hero/3.jpg';

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
      <div className="rafting-tour-container">
        <div className="rafting-tour-content">
          <div className="details-scroll-box">
            <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
            <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
            <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
            <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
            <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
          </div>
          <section id="overview">
            <h2>Overview</h2>
            <p>{whiteWaterRaftingDetails.overview}</p>
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
        <div className="rafting-tour-sidebar">
          <div className="sidebar-box">
            <h3>White Water Day Rafting</h3>
            <p>Price starts from <span className="price">{whiteWaterRaftingDetails.price}</span></p>
          </div>
          <div className="sidebar-buttons">
            <button className="book-now">Book Now</button>
            <button className="make-inquiry">Make Inquiry</button>
          </div>
          <div className="sidebar-recommendation">
            <p>RECOMMENDED ON</p>
            <img src="../../assets/img/tripadvisor.png" alt="Tripadvisor" className="tripadvisor-logo" />
            <p>Trek Ways Nepal</p>
          </div>
          <div className="sidebar-contact">
            <h4>Speak to Expert</h4>
            <p><span role="img" aria-label="Nepal">🇳🇵</span> Nepal: +977 9841666232</p>
            <p><span role="img" aria-label="USA">🇺🇸</span> USA: +1 651-703-8181</p>
            <p><span role="img" aria-label="UK">🇬🇧</span> UK: +44 7946748780</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhiteWaterDayRafting;
