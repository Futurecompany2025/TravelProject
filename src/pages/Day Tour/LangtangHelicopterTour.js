import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './langtangHelicopter.css';
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/12.jpg';
const langtangTourDetails = {
  title: 'Langtang Helicopter Tour',
  backgroundImage: backgroundImage,
  price: 'USD 1500',
  overview: 'Embark on an exciting helicopter tour to Langtang Valley...',
  itinerary: [
    'Day 1: Departure from Kathmandu to Langtang Valley',
    'Day 1: Explore Langtang Valley and nearby attractions',
    'Day 1: Return flight to Kathmandu by late afternoon'
  ],
  includes: 'Helicopter ride, all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Please bring warm clothing and your camera.',
  gallery: 'Panoramic views of Langtang Valley and surrounding peaks.'
};

const LangtangHelicopterTour = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="langtang-tour-header" style={{ backgroundImage: `url(${langtangTourDetails.backgroundImage})` }}>
        <h1>{langtangTourDetails.title}</h1>
      </div>
      <div className="langtang-tour-details-wrapper">
        <div className="langtang-tour-column">
          <div className="langtang-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{langtangTourDetails.price}</span>
          </div>
          <div className="langtang-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Helicopter Tour</span>
          </div>
          <div className="langtang-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>No meals provided</span>
          </div>
        </div>
        <div className="langtang-tour-column">
          <div className="langtang-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>4,984m/16,348ft</span>
          </div>
          <div className="langtang-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
          <div className="langtang-tour-item">
            <LocationOn />
            <span>Distance:</span>
            <span>Approx 120 KM round trip</span>
          </div>
        </div>
        <div className="langtang-tour-column">
          <div className="langtang-tour-item">
            <Flight />
            <span>Transportation:</span>
            <span>Helicopter</span>
          </div>
          <div className="langtang-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Moderate</span>
          </div>
          <div className="langtang-tour-item">
            <Hotel />
            <span>Accommodations:</span>
            <span>N/A</span>
          </div>
        </div>
        <div className="langtang-tour-column">
          <div className="langtang-tour-item">
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
      <div className="langtang-tour-content">
        <div className="langtang-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{langtangTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{langtangTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{langtangTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{langtangTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{langtangTourDetails.gallery}</p>
          </section>
        </div>
        <aside className="langtang-tour-aside">
          <div className="tour-info-box">
            <h2>{langtangTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{langtangTourDetails.price}</span></p>
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
export default LangtangHelicopterTour;
