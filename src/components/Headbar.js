import React from 'react';
import './Headerbar.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flag from 'react-world-flags';
const Headerbar = () => {
  return (
    <div className="headerbar bg-dark text-white">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center justify-content-md-start mb-2 mb-md-0">
            <div className="headerbar-item d-flex align-items-center mb-2 mb-md-0 mr-md-3">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +9779841666232
            </div>
            <div className="headerbar-item d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@J One Trekking And Expedition.com
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end flex-wrap">
            <div className="headerbar-item d-flex align-items-center mr-3 mb-2 mb-md-0">
              <div className="contact-info d-flex align-items-center">
                <span className="talk-to-expert mr-2">Talk to expert</span>
                <Flag code="NP" className="flag-icon mr-2" />
                <span className="contact-number">+9779841666232</span>
                <FontAwesomeIcon icon={faWhatsapp} className="ml-2" />
                <FontAwesomeIcon icon={faViber} className="ml-2" />
              </div>
            </div>
            <div className="headerbar-item d-flex align-items-center mr-3 mb-2 mb-md-0">
              <div className="contact-info d-flex align-items-center">
                <span className="talk-to-expert mr-2">Talk to expert</span>
                <Flag code="US" className="flag-icon mr-2" />
                <span className="contact-number">+1-651-703-8181</span>
                <FontAwesomeIcon icon={faWhatsapp} className="ml-2" />
                <FontAwesomeIcon icon={faViber} className="ml-2" />
              </div>
            </div>
            <div className="headerbar-item d-flex align-items-center mr-3 mb-2 mb-md-0">
              <div className="contact-info d-flex align-items-center">
                <span className="talk-to-expert mr-2">Talk to expert</span>
                <Flag code="GB" className="flag-icon mr-2" />
                <span className="contact-number">+447946748780</span>
                <FontAwesomeIcon icon={faWhatsapp} className="ml-2" />
                <FontAwesomeIcon icon={faViber} className="ml-2" />
              </div>
            </div>
            <div className="headerbar-cta">
              <button className="make-inquiry-btn btn btn-warning">Make Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headerbar;
