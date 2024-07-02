import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './TibetTravelGuide.css'; // Ensure you have a CSS file for styling

const TibetTravelGuide = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="tibet-travel-guide-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Tibet Travel Guide</li>
            </ol>
          </nav>
          <div className="title-section">
            <h1>Tibet Travel Guide</h1>
          </div>
          <div className="useful-information">
            <h2>Useful Information:</h2>
            <ul>
              <li><strong>The Tibet Autonomous Region</strong></li>
              <li><strong>Area:</strong> 1,228,400 sq km</li>
              <li><strong>Elevation:</strong> 4,500m on average, Mount Everest (8,848m)</li>
              <li><strong>Natural divisions:</strong> Plateau, Mountains, Valleys</li>
              <li><strong>Capital:</strong> Lhasa</li>
              <li><strong>Population:</strong> 3.5 million (predominantly Tibetan)</li>
              <li><strong>Language:</strong> Tibetan (official), Chinese (Mandarin)</li>
              <li><strong>Currency:</strong> Chinese Yuan (CNY)</li>
              <li><strong>National symbols:</strong> [Insert specific symbols if applicable]</li>
              <li><strong>Neighboring countries:</strong> India, Nepal, Bhutan</li>
              <li><strong>Popular tourist destinations:</strong> Lhasa, Shigatse, Mount Everest Base Camp, Namtso Lake, Mount Kailash</li>
              <li><strong>UNESCO World Heritage Sites:</strong> Potala Palace, Jokhang Temple</li>
              <li><strong>Mountains:</strong> Himalayas, Transhimalaya</li>
              <li><strong>Best travel seasons:</strong> Spring (April to June), Autumn (September to October)</li>
              <li><strong>Climate:</strong> High-altitude, cold and dry</li>
              <li><strong>Flora and Fauna:</strong> Unique high-altitude species, including Tibetan antelope and snow leopard</li>
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

export default TibetTravelGuide;
