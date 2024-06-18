import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './tarebhirdayHike.css'; // CSS file for Tarebhirday Hike page

import {
  DirectionsWalk, CalendarToday, Height, LocationOn, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/11.jpg'; // Adjusted image path as needed

const tarebhirdayHikeDetails = {
  title: 'Tarebhirday Hike',
  backgroundImage: backgroundImage,
  overview: 'Embark on a breathtaking hike through the scenic trails of Tarebhirday. Enjoy stunning views, lush forests, and a serene environment away from the hustle and bustle of the city.',
  itinerary: [
    'Day 1: Start from Kathmandu early morning',
    'Day 1: Hike through the Tarebhirday trails',
    'Day 1: Picnic lunch at a scenic viewpoint',
    'Day 1: Return to Kathmandu by late afternoon'
  ],
  includes: 'Guide fees, picnic lunch, and transportation.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Wear comfortable hiking shoes, bring water, and wear sun protection.',
  gallery: 'Photos of scenic views, trail paths, and lush greenery of Tarebhirday.',
  reviews: 'Read what hikers have experienced on their Tarebhirday journey.',
  faqs: 'Frequently asked questions about the Tarebhirday hike.'
};

const TarebhirdayHike = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="tarebhirday-hike-header" style={{ backgroundImage: `url(${tarebhirdayHikeDetails.backgroundImage})` }}>
        <h1>{tarebhirdayHikeDetails.title}</h1>
      </div>
      <div className="tarebhirday-hike-details-wrapper">
        <div className="tarebhirday-hike-columns">
          <div className="tarebhirday-hike-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Hiking</span>
          </div>
          <div className="tarebhirday-hike-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Picnic lunch included</span>
          </div>
        </div>
        <div className="tarebhirday-hike-columns">
          <div className="tarebhirday-hike-item">
            <Height />
            <span>Max Altitude:</span>
            <span>1000m/3280ft (approx)</span>
          </div>
          <div className="tarebhirday-hike-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
        </div>
        <div className="tarebhirday-hike-columns">
          <div className="tarebhirday-hike-item">
            <Grade />
            <span>Difficulty:</span>
            <span>Moderate</span>
          </div>
          <div className="tarebhirday-hike-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>Not applicable</span>
          </div>
          <div className="tarebhirday-hike-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, best in autumn and spring</span>
          </div>
        </div>
      </div>
      <div className="tarebhirday-hike-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('reviews')}>Reviews</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('faqs')}>FAQs</div>
      </div>
      <div className="tarebhirday-hike-content">
        <div className="tarebhirday-hike-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{tarebhirdayHikeDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{tarebhirdayHikeDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{tarebhirdayHikeDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{tarebhirdayHikeDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{tarebhirdayHikeDetails.gallery}</p>
          </section>
          <section id="reviews">
            <h2>Reviews</h2>
            <p>{tarebhirdayHikeDetails.reviews}</p>
          </section>
          <section id="faqs">
            <h2>FAQs</h2>
            <p>{tarebhirdayHikeDetails.faqs}</p>
          </section>
        </div>
        <aside className="tarebhirday-hike-aside">
          <div className="tarebhirday-hike-info-box">
            <h2>{tarebhirdayHikeDetails.title}</h2>
            <button className="book-now-btn">Book Now</button>
            <button className="make-inquiry-btn">Make Inquiry</button>
            <div className="contact-box">
              <h3>Contact Us</h3>
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

export default TarebhirdayHike;
