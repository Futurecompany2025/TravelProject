import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './shivapuriDayHike.css'; // Make sure to import the CSS file
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Grade, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/3.jpeg';
const shivapuriTourDetails = {
  title: 'Shivapuri Day Hike',
  backgroundImage: backgroundImage,
  price: 'USD 80',
  overview: 'Experience the natural beauty and serenity of the Shivapuri National Park on this day hike...',
  itinerary: [
    'Day 1: Early morning drive from Kathmandu to Shivapuri',
    'Day 1: Hike through the lush forest of Shivapuri National Park',
    'Day 1: Enjoy panoramic views of the Himalayas and Kathmandu Valley',
    'Day 1: Return to Kathmandu by evening'
  ],
  includes: 'Transportation, guide fees, and entrance fees to the national park.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Wear comfortable hiking shoes and bring water and snacks.',
  gallery: 'Pictures of the hike, the national park, and scenic views.'
};

const ShivapuriDayHike = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="shivapuri-tour-header" style={{ backgroundImage: `url(${shivapuriTourDetails.backgroundImage})` }}>
        <h1>{shivapuriTourDetails.title}</h1>
      </div>
      <div className="shivapuri-tour-details-wrapper">
        <div className="shivapuri-tour-column">
          <div className="shivapuri-tour-item">
            <AttachMoney />
            <span>Price starts from</span>
            <span>{shivapuriTourDetails.price}</span>
          </div>
          <div className="shivapuri-tour-item">
            <DirectionsWalk />
            <span>Activity:</span>
            <span>Hiking</span>
          </div>
          <div className="shivapuri-tour-item">
            <CalendarToday />
            <span>Meal:</span>
            <span>Bring your own</span>
          </div>
        </div>
        <div className="shivapuri-tour-column">
          <div className="shivapuri-tour-item">
            <Height />
            <span>Max Altitude:</span>
            <span>2,732m/8,963ft</span>
          </div>
          <div className="shivapuri-tour-item">
            <LocationOn />
            <span>Start & End Point:</span>
            <span>Kathmandu/Kathmandu</span>
          </div>
        </div>
        <div className="shivapuri-tour-column">
          <div className="shivapuri-tour-item">
            <Grade />
            <span>Trip Grade:</span>
            <span>Moderate</span>
          </div>
          <div className="shivapuri-tour-item">
            <DateRange />
            <span>Best Time:</span>
            <span>Year-round, best in spring and autumn</span>
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
      <div className="shivapuri-tour-content">
        <div className="shivapuri-tour-main">
          <section id="overview">
            <h2>Overview</h2>
            <p>{shivapuriTourDetails.overview}</p>
          </section>
          <section id="includes">
            <h2>Includes</h2>
            <p>{shivapuriTourDetails.includes}</p>
          </section>
          <section id="cost-dates">
            <h2>Cost & Dates</h2>
            <p>{shivapuriTourDetails.costDates}</p>
          </section>
          <section id="useful-info">
            <h2>Useful Info</h2>
            <p>{shivapuriTourDetails.usefulInfo}</p>
          </section>
          <section id="gallery">
            <h2>Gallery</h2>
            <p>{shivapuriTourDetails.gallery}</p>
          </section>
        </div>
        <aside className="shivapuri-tour-aside">
          <div className="tour-info-box">
            <h2>{shivapuriTourDetails.title}</h2>
            <p>Price starts from <span className="tour-price">{shivapuriTourDetails.price}</span></p>
            <button className="book-now-btn">Book Now</button>
            <button className="make-inquiry-btn">Make Inquiry</button>
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

export default ShivapuriDayHike;
