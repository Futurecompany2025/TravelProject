import React from 'react';
import './Headerbar.css'; // Import the CSS file for additional styles if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flag from 'react-world-flags';
const Headerbar = () => {
  const formatWhatsappLink = (phoneNumber) => `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  return (
    <div className="headerbar bg-dark text-white py-2">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center flex-wrap">
            <div className="headerbar-item d-flex align-items-center mb-2 mb-md-0 mr-2">
              <a href={formatWhatsappLink('+9779860915040')} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-white">
                <FontAwesomeIcon icon={faPhone} className="mr-1" /> +9779860915040
              </a>
            </div>
            <div className="headerbar-item d-flex align-items-center mb-2 mb-md-0 mr-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> info@j1trekkingnepal.com
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center flex-wrap">
            <div className="headerbar-item d-flex align-items-center mb-2 mb-md-0 mr-2">
              <div className="contact-info d-flex flex-column align-items-center">
                <span className="talk-to-expert">Talk to expert</span>
                <div className="d-flex align-items-center">
                  <Flag code="NP" className="flag-icon mr-1" />
                  <a href={formatWhatsappLink('+9779860915040')} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-white">
                  +9779860915040 <FontAwesomeIcon icon={faWhatsapp} className="ml-1" />
                  </a>
                  <FontAwesomeIcon icon={faViber} className="ml-1" />
                </div>
              </div>
            </div>
            <div className="headerbar-item d-flex align-items-center mb-2 mb-md-0 mr-2">
              <div className="contact-info d-flex flex-column align-items-center">
                <span className="talk-to-expert">Talk to expert</span>
                <div className="d-flex align-items-center">
                  <Flag code="US" className="flag-icon mr-1" />
                  <a href={formatWhatsappLink('+31 6 37404922')} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-white">
                    +31 6 37404922 <FontAwesomeIcon icon={faWhatsapp} className="ml-1" />
                  </a>
                  <FontAwesomeIcon icon={faViber} className="ml-1" />
                </div>
              </div>
            </div>
            <div className="headerbar-item d-flex align-items-center mb-2 mb-md-0 mr-2">
              <div className="contact-info d-flex flex-column align-items-center">
                <span className="talk-to-expert">Talk to expert</span>
                <div className="d-flex align-items-center">
                  <Flag code="GB" className="flag-icon mr-1" />
                  <a href={formatWhatsappLink('+61 418 768 278')} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-white">
                    +61 418 768 278 <FontAwesomeIcon icon={faWhatsapp} className="ml-1" />
                  </a>
                  <FontAwesomeIcon icon={faViber} className="ml-1" />
                </div>
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
