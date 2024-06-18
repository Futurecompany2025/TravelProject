import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './kathmanduAndPatanDayTour.css'; // Adjusted CSS file name or path as needed
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/6.jpg'; // Adjusted image path as needed

const kathmanduAndPatanDayTourDetails = {
  title: 'Kathmandu & Patan Day Tour',
  backgroundImage: backgroundImage,
  price: 'USD 120',
  overview: 'Explore the cultural delights of Kathmandu and Patan on this day tour. Visit UNESCO World Heritage sites, ancient temples, and vibrant markets.',
  itinerary: [
    'Day 1: Visit Swayambhunath Stupa and Patan Durbar Square',
    'Day 1: Lunch at a local restaurant',
    'Day 1: Explore Kathmandu Durbar Square and Boudhanath Stupa',
    'Day 1: Return to your hotel by evening'
  ],
  includes: 'Transportation, lunch, guide fees, and entrance fees to heritage sites.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Comfortable walking shoes and modest clothing are recommended.',
  gallery: 'Images of Kathmandu and Patan heritage sites and local markets.',
  reviews: 'Check out reviews from travelers who enjoyed this cultural experience.',
  faqs: 'Frequently asked questions about Kathmandu & Patan Day Tour.'
};

const KathmanduAndPatanDayTour = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="kathmandu-and-patan-day-tour-header" style={{ backgroundImage: `url(${kathmanduAndPatanDayTourDetails.backgroundImage})` }}>
        <h1>{kathmanduAndPatanDayTourDetails.title}</h1>
      </div>
      <div className="kathmandu-and-patan-day-tour-details-wrapper">
        <div className="kathmandu-and-patan-day-tour-columns">
          <div className="kathmandu-and-patan-day-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{kathmanduAndPatanDayTourDetails.price}</span>
          </div>
          <div className="kathmandu-and-patan-day-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>City Tour</span>
          </div>
          <div className="kathmandu-and-patan-day-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Lunch included</span>
          </div>
        </div>
        <div className="kathmandu-and-patan-day-tour-columns">
          <div className="kathmandu-and-patan-day-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>1400m/4593ft (Kathmandu)</span>
          </div>
          <div className="kathmandu-and-patan-day-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
          <div className="kathmandu-and-patan-day-tour-item">
            <Flight />
            <span>Transportation:</span>
            <span>Private vehicle</span>
          </div>
        </div>
        <div className="kathmandu-and-patan-day-tour-columns">
          <div className="kathmandu-and-patan-day-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Easy</span>
          </div>
          <div className="kathmandu-and-patan-day-tour-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>Not applicable</span>
          </div>
          <div className="kathmandu-and-patan-day-tour-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, best in spring and autumn</span>
          </div>
        </div>
      </div>
      <div className="kathmandu-and-patan-day-tour-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('reviews')}>Reviews</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('faqs')}>FAQs</div>
      </div>
      <div className="kathmandu-and-patan-day-tour-content">
        <div className="kathmandu-and-patan-day-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{kathmanduAndPatanDayTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{kathmanduAndPatanDayTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{kathmanduAndPatanDayTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{kathmanduAndPatanDayTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{kathmanduAndPatanDayTourDetails.gallery}</p>
          </section>
          <section id="reviews">
            <h2>Reviews</h2>
            <p>{kathmanduAndPatanDayTourDetails.reviews}</p>
          </section>
          <section id="faqs">
            <h2>FAQs</h2>
            <p>{kathmanduAndPatanDayTourDetails.faqs}</p>
          </section>
        </div>
        <aside className="kathmandu-and-patan-day-tour-aside">
          <div className="kathmandu-and-patan-day-tour-info-box">
            <h2>{kathmanduAndPatanDayTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{kathmanduAndPatanDayTourDetails.price}</span></p>
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

export default KathmanduAndPatanDayTour;
