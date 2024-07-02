import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './BhutanTravelGuide.css'; // Ensure you have a CSS file for styling

const BhutanTravelGuide = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="bhutan-travel-guide-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Bhutan Travel Guide</li>
            </ol>
          </nav>
          <div className="title-section">
            <h1>Bhutan Travel Guide</h1>
          </div>
          <div className="useful-information">
            <h2>Useful Information:</h2>
            <ul>
              <li><strong>The Kingdom of Bhutan</strong></li>
              <li><strong>Area:</strong> 38,394 sq km</li>
              <li><strong>Elevation:</strong> 200m to 7,570m above sea level</li>
              <li><strong>Natural divisions:</strong> Lowlands, Valleys, Highlands</li>
              <li><strong>Capital:</strong> Thimphu</li>
              <li><strong>Population:</strong> 750,000 (various ethnic groups)</li>
              <li><strong>Language:</strong> Dzongkha (official), English widely spoken</li>
              <li><strong>Currency:</strong> Ngultrum (BTN)</li>
              <li><strong>National symbols:</strong> Takin (animal), Blue Poppy (flower), Raven (bird)</li>
              <li><strong>Neighboring countries:</strong> India (south, east, west), China (north)</li>
              <li><strong>Popular tourist destinations:</strong> Paro, Thimphu, Punakha, Bumthang, Trongsa</li>
              <li><strong>UNESCO World Heritage Sites:</strong> [Insert specific sites if applicable]</li>
              <li><strong>Mountains:</strong> Gangkhar Puensum, Jomolhari, and other Himalayan peaks</li>
              <li><strong>Best travel seasons:</strong> Spring (March to May), Autumn (September to November)</li>
              <li><strong>Climate:</strong> Varies with elevation, from subtropical to alpine</li>
              <li><strong>Flora and Fauna:</strong> Rich biodiversity, including rare species like the Snow Leopard</li>
            </ul>
          </div>
          <div className="communication-facilities">
            <h2>Communication Facilities:</h2>
            <p>[Insert communication facilities content here]</p>
          </div>
          <div className="postal-services">
            <h2>Postal, Freight and Cargo Services:</h2>
            <p>[Insert postal services content here]</p>
          </div>
          <div className="telephone-services">
            <h2>Telephone Services:</h2>
            <p>[Insert telephone services content here]</p>
          </div>
          <div className="internet-services">
            <h2>Internet Services:</h2>
            <p>[Insert internet services content here]</p>
          </div>
          <div className="medical-facilities">
            <h2>Medical Facilities:</h2>
            <p>[Insert medical facilities content here]</p>
          </div>
          <div className="travel-insurance">
            <h2>Travel Insurance:</h2>
            <p>[Insert travel insurance content here]</p>
          </div>
          <div className="food-accommodation">
            <h2>Food and Accommodation:</h2>
            <p>[Insert food and accommodation content here]</p>
          </div>
          <div className="vaccination-medicines">
            <h2>Vaccination and Medicines:</h2>
            <p>[Insert vaccination and medicines content here]</p>
          </div>
          <div className="legal-documents">
            <h2>Our legal documents:</h2>
            <p>[Insert legal documents content here]</p>
          </div>
          <div className="passport-visa-information">
            <h2>Passport and Visa Information:</h2>
            <p>[Insert passport and visa information content here]</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BhutanTravelGuide;
