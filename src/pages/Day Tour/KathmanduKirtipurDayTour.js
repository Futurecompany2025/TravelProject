import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './kathmanduKirtipurDayTour.css'; // Adjusted CSS file name or path as needed
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/6.jpg'; // Adjusted image path as needed
const kathmanduKirtipurDayTourDetails = {
  title: 'Kathmandu & Kirtipur Day Tour',
  backgroundImage: backgroundImage,
  price: 'USD 80',
  overview: 'Explore the historical and cultural highlights of Kathmandu and Kirtipur in a single day. Visit ancient temples, bustling markets, and experience the local lifestyle.',
  itinerary: [
    'Day 1: Morning visit to Kathmandu Durbar Square',
    'Day 1: Explore the Swayambhunath Stupa (Monkey Temple)',
    'Day 1: Lunch at a traditional Newari restaurant in Kirtipur',
    'Day 1: Afternoon visit to Kirtipur’s ancient temples and historical sites',
    'Day 1: Return to Kathmandu by evening'
  ],
  includes: 'Transport, lunch, guide fees, and all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Wear comfortable shoes and bring a hat and sunscreen.',
  gallery: 'Photos of historical sites, temples, and local life in Kathmandu and Kirtipur.',
  reviews: 'See what our customers say about this immersive day tour.',
  faqs: 'FAQs for Kathmandu and Kirtipur Day Tour.'
};

const KathmanduKirtipurDayTour = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="kathmandu-kirtipur-day-tour-header" style={{ backgroundImage: `url(${kathmanduKirtipurDayTourDetails.backgroundImage})` }}>
        <h1>{kathmanduKirtipurDayTourDetails.title}</h1>
      </div>
      <div className="kathmandu-kirtipur-day-tour-details-wrapper">
        <div className="kathmandu-kirtipur-day-tour-columns">
          <div className="kathmandu-kirtipur-day-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{kathmanduKirtipurDayTourDetails.price}</span>
          </div>
          <div className="kathmandu-kirtipur-day-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>City Tour</span>
          </div>
          <div className="kathmandu-kirtipur-day-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Lunch included</span>
          </div>
        </div>
        <div className="kathmandu-kirtipur-day-tour-columns">
          <div className="kathmandu-kirtipur-day-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>1400m/4593ft (Kathmandu)</span>
          </div>
          <div className="kathmandu-kirtipur-day-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
          <div className="kathmandu-kirtipur-day-tour-item">
            <Flight />
            <span>Transportation:</span>
            <span>Private vehicle</span>
          </div>
        </div>
        <div className="kathmandu-kirtipur-day-tour-columns">
          <div className="kathmandu-kirtipur-day-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Easy</span>
          </div>
          <div className="kathmandu-kirtipur-day-tour-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>Not applicable</span>
          </div>
          <div className="kathmandu-kirtipur-day-tour-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, best in spring and autumn</span>
          </div>
        </div>
      </div>
      <div className="kathmandu-kirtipur-day-tour-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('reviews')}>Reviews</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('faqs')}>FAQs</div>
      </div>
      <div className="kathmandu-kirtipur-day-tour-content">
        <div className="kathmandu-kirtipur-day-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{kathmanduKirtipurDayTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{kathmanduKirtipurDayTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{kathmanduKirtipurDayTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{kathmanduKirtipurDayTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{kathmanduKirtipurDayTourDetails.gallery}</p>
          </section>
          <section id="reviews">
            <h2>Reviews</h2>
            <p>{kathmanduKirtipurDayTourDetails.reviews}</p>
          </section>
          <section id="faqs">
            <h2>FAQs</h2>
            <p>{kathmanduKirtipurDayTourDetails.faqs}</p>
          </section>
        </div>
        <aside className="kathmandu-kirtipur-day-tour-aside">
          <div className="kathmandu-kirtipur-day-tour-info-box">
            <h2>{kathmanduKirtipurDayTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{kathmanduKirtipurDayTourDetails.price}</span></p>
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
export default KathmanduKirtipurDayTour;
