import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './IndiaTravelGuide.css'; 

const IndiaTravelGuide = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="india-travel-guide-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">India Travel Guide</li>
            </ol>
          </nav>
          <h1>India Travel Guide</h1>
          <div className="useful-information">
            <h2>Useful Information:</h2>
            <ul>
              <li><strong>The Republic of India</strong></li>
              <li><strong>Area:</strong> 3,287,263 sq km</li>
              <li><strong>Elevation:</strong> Sea level to 8,848m (Kanchenjunga)</li>
              <li><strong>Natural divisions:</strong> Plains, Hills, Mountains, Plateaus, Coastal areas</li>
              <li><strong>Capital:</strong> New Delhi</li>
              <li><strong>Population:</strong> 1.4 billion (over 2,000 ethnic groups and more than 1,600 languages)</li>
              <li><strong>Language:</strong> Hindi (official), English (secondary official), and several regional languages</li>
              <li><strong>Currency:</strong> Indian Rupee (INR)</li>
              <li><strong>National symbols:</strong> Tiger (animal), Lotus (flower), Peacock (bird)</li>
              <li><strong>Neighboring countries:</strong> Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar</li>
              <li><strong>Popular tourist destinations:</strong> Delhi, Mumbai, Goa, Kerala, Rajasthan, Agra, Varanasi, Himachal Pradesh</li>
              <li><strong>UNESCO World Heritage Sites:</strong> Taj Mahal, Qutub Minar, Red Fort, Humayun's Tomb, Sundarbans, and more</li>
              <li><strong>Mountains:</strong> Himalayas (highest peaks including Kanchenjunga)</li>
              <li><strong>Best travel seasons:</strong> Winter (October to March), Monsoon (varies by region)</li>
              <li><strong>Climate:</strong> Diverse, from tropical in the south to alpine in the north</li>
              <li><strong>Flora and Fauna:</strong> Over 90,000 species of animals, 47,000 species of plants</li>
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
export default IndiaTravelGuide;
