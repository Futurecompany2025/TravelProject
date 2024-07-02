import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Headerbar from '../../components/Headbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './NepalTravelGuide.css'; // Ensure you have a CSS file for styling

const NepalTravelGuide = () => {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div className="nepal-travel-guide-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Nepal Travel Guide</li>
            </ol>
          </nav>
          <h1>Nepal Travel Guide</h1>
          <div className="useful-information">
            <h2>Useful Information:</h2>
            <ul>
              <li><strong>The Federal Democratic Republic of Nepal</strong></li>
              <li><strong>Area:</strong> 1,47,181 sq km</li>
              <li><strong>Elevation:</strong> 60m to 8,848m above sea level</li>
              <li><strong>Natural divisions:</strong> Terai region (Plains), Elevated Flatlands and Hills, Mountain region</li>
              <li><strong>Capital:</strong> Kathmandu</li>
              <li><strong>Population:</strong> 27 million (more than 91 ethnic groups and 70 different languages)</li>
              <li><strong>Language:</strong> Nepali (native and official), English</li>
              <li><strong>Currency:</strong> Rupees</li>
              <li><strong>National flower, bird, and animal:</strong> Rhododendron, Lophophorous (Danphe), Cow</li>
              <li><strong>Neighboring countries:</strong> Republic of India (east, south, west), Peoples’ Republic of China (north)</li>
              <li><strong>Popular tourist destinations:</strong> Kathmandu, Patan, Bhaktapur, Pokhara, Lumbini, Chitwan, Janakpur, Gorkha</li>
              <li><strong>Destinations listed under UNESCO World Heritage Sites:</strong> Pashupatinath, Swayambhunath, Boudhanath, Kathmandu Durbar Square, Bhaktapur Durbar Square, Patan Durbar Square, Lumbini, Chitwan National Park, Sagarmatha National Park</li>
              <li><strong>Mountains:</strong> 8 out of the world’s 10 tallest mountains, including Mt. Everest. 240 peaks over 20,000ft</li>
              <li><strong>Best travel seasons:</strong> Spring (March, April, May) and Autumn (September, October, November)</li>
              <li><strong>Climate:</strong> Varies with elevation, from humid tropical to cooler alpine</li>
              <li><strong>Flora:</strong> 6,000 species of plants, 245 unique to Nepal, diverse ecosystems and vegetation</li>
              <li><strong>Fauna:</strong> Over 500 species of butterflies, 850 species of birds, 185 species of mammals</li>
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
export default NepalTravelGuide;
