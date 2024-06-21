import React from 'react';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './unesco-world-heritage-sites.css';
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/Tour/6.jpg'; // Replace with appropriate image path
const unescoSitesDetails = {
  title: '5 UNESCO World Heritage Sites',
  backgroundImage: backgroundImage, // Replace with appropriate image path
  overview: 'Explore the cultural and natural heritage of these iconic UNESCO World Heritage Sites. Each site offers a unique glimpse into history, architecture, and natural wonders.',
  sites: [
    {
      name: 'Site 1',
      location: 'Location 1',
      description: 'Description of Site 1.'
    },
    {
      name: 'Site 2',
      location: 'Location 2',
      description: 'Description of Site 2.'
    },
    {
      name: 'Site 3',
      location: 'Location 3',
      description: 'Description of Site 3.'
    },
    {
      name: 'Site 4',
      location: 'Location 4',
      description: 'Description of Site 4.'
    },
    {
      name: 'Site 5',
      location: 'Location 5',
      description: 'Description of Site 5.'
    }
  ],
  includes: 'Transportation, guide fees, entrance fees, and all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Wear comfortable shoes, bring a camera, and respect local customs.',
  gallery: 'Photos showcasing the beauty and history of each UNESCO site.',
  reviews: 'Read reviews from visitors who have explored these UNESCO World Heritage Sites.',
  faqs: 'Frequently asked questions about visiting these iconic sites.'
};

const FiveUNESCOHeritageSites = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="five-unesco-world-heritage-sites-header" style={{ backgroundImage: `url(${unescoSitesDetails.backgroundImage})` }}>
        <h1>{unescoSitesDetails.title}</h1>
      </div>
      <div className="five-unesco-world-heritage-sites-details-wrapper">
        <div className="five-unesco-world-heritage-sites-overview">
          <h2>Overview</h2>
          <p>{unescoSitesDetails.overview}</p>
        </div>
        <div className="five-unesco-world-heritage-sites-sites">
          {unescoSitesDetails.sites.map((site, index) => (
            <div key={index} className="five-unesco-world-heritage-sites-site">
              <h2>{site.name}</h2>
              <p><strong>Location:</strong> {site.location}</p>
              <p>{site.description}</p>
            </div>
          ))}
        </div>
        <div className="five-unesco-world-heritage-sites-includes">
          <h2>Includes</h2>
          <p>{unescoSitesDetails.includes}</p>
        </div>
        <div className="five-unesco-world-heritage-sites-cost-dates">
          <h2>Cost & Dates</h2>
          <p>{unescoSitesDetails.costDates}</p>
        </div>
        <div className="five-unesco-world-heritage-sites-useful-info">
          <h2>Useful Info</h2>
          <p>{unescoSitesDetails.usefulInfo}</p>
        </div>
        <div className="five-unesco-world-heritage-sites-gallery">
          <h2>Gallery</h2>
          <p>{unescoSitesDetails.gallery}</p>
        </div>
        <div className="five-unesco-world-heritage-sites-reviews">
          <h2>Reviews</h2>
          <p>{unescoSitesDetails.reviews}</p>
        </div>
        <div className="five-unesco-world-heritage-sites-faqs">
          <h2>FAQs</h2>
          <p>{unescoSitesDetails.faqs}</p>
        </div>
      </div>
      <div className="five-unesco-world-heritage-sites-scroll-box">
        <div className="scroll-box-title" onClick={() => scrollToSection('overview')}>Overview</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('includes')}>Includes</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('cost-dates')}>Cost & Dates</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('useful-info')}>Useful Info</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('gallery')}>Gallery</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('reviews')}>Reviews</div>
        <div className="scroll-box-title" onClick={() => scrollToSection('faqs')}>FAQs</div>
      </div>
      <Footer />
    </div>
  );
};
export default FiveUNESCOHeritageSites;
