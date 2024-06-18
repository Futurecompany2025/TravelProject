import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './kakani.css'; // Adjusted CSS file name or path as needed
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/4.jpeg'; // Adjusted image path as needed

const kakaniDayHikeDetails = {
  title: 'Kakani Day Hike',
  backgroundImage: backgroundImage,
  price: 'USD 100',
  overview: 'Join us for a scenic day hike to Kakani, where you can enjoy breathtaking views of the Himalayan range, lush forests, and charming local villages.',
  itinerary: [
    'Day 1: Early morning drive from Kathmandu to Kakani',
    'Day 1: Begin the hike from Kakani, passing through pine forests and enjoying panoramic views',
    'Day 1: Lunch at a local restaurant',
    'Day 1: Continue the hike to a viewpoint, then return to Kathmandu by evening'
  ],
  includes: 'Transport to and from Kathmandu, lunch, guide fees, and all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Wear comfortable hiking shoes and bring a camera for the views.',
  gallery: 'Stunning views of the Himalayas and local flora and fauna.',
  reviews: 'See what our customers say about this refreshing day hike.',
  faqs: 'FAQs for Kakani Day Hike.'
};

const KakaniDayHike = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="kakani-day-hike-header" style={{ backgroundImage: `url(${kakaniDayHikeDetails.backgroundImage})` }}>
        <h1>{kakaniDayHikeDetails.title}</h1>
      </div>
      <div className="kakani-day-hike-details-wrapper">
        <div className="kakani-day-hike-columns">
          <div className="kakani-day-hike-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{kakaniDayHikeDetails.price}</span>
          </div>
          <div className="kakani-day-hike-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Hiking</span>
          </div>
          <div className="kakani-day-hike-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Lunch included</span>
          </div>
        </div>
        <div className="kakani-day-hike-columns">
          <div className="kakani-day-hike-item">
            <Height />
            <span>Max Altitude:</span>
            <span>(2,073m/6,800ft)</span>
          </div>
          <div className="kakani-day-hike-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
          <div className="kakani-day-hike-item">
            <Flight />
            <span>Transportation:</span>
            <span>Private vehicle</span>
          </div>
        </div>
        <div className="kakani-day-hike-columns">
          <div className="kakani-day-hike-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Easy to Moderate</span>
          </div>
          <div className="kakani-day-hike-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>Not applicable</span>
          </div>
          <div className="kakani-day-hike-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, weather permitting</span>
          </div>
        </div>
      </div>
      <div className="kakani-day-hike-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('reviews')}>Reviews</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('faqs')}>FAQs</div>
      </div>
      <div className="kakani-day-hike-content">
        <div className="kakani-day-hike-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{kakaniDayHikeDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{kakaniDayHikeDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{kakaniDayHikeDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{kakaniDayHikeDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{kakaniDayHikeDetails.gallery}</p>
          </section>
          <section id="reviews">
            <h2>Reviews</h2>
            <p>{kakaniDayHikeDetails.reviews}</p>
          </section>
          <section id="faqs">
            <h2>FAQs</h2>
            <p>{kakaniDayHikeDetails.faqs}</p>
          </section>
        </div>
        <aside className="kakani-day-hike-aside">
          <div className="kakani-day-hike-info-box">
            <h2>{kakaniDayHikeDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{kakaniDayHikeDetails.price}</span></p>
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
export default KakaniDayHike;
