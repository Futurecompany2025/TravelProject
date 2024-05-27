import React from 'react';
import './Headerbar.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons';
import Flag from 'react-world-flags';
const Headerbar = () => {
  return (
    <div className="headerbar">
      <div className="headerbar-left">
        <div className="headerbar-item">
          <FontAwesomeIcon icon={faPhone} /> +9779841666232
        </div>
        <div className="headerbar-item">
          <FontAwesomeIcon icon={faEnvelope} /> info@J1TrekkingNepal.com
        </div>
      </div>
      <div className="headerbar-right">
        <div className="headerbar-item">
          <div className="contact-info">
            <span className="talk-to-expert">Talk to expert</span>
            <Flag code="NP" className="flag-icon" />
            +9779841666232 <FontAwesomeIcon icon={faWhatsapp} /> <FontAwesomeIcon icon={faViber} />
          </div>
        </div>
        <div className="headerbar-item">
          <div className="contact-info">
            <span className="talk-to-expert">Talk to expert</span>
            <Flag code="US" className="flag-icon" />
            +1-651-703-8181 <FontAwesomeIcon icon={faWhatsapp} /> <FontAwesomeIcon icon={faViber} />
          </div>
        </div>
        <div className="headerbar-item">
          <div className="contact-info">
            <span className="talk-to-expert">Talk to expert</span>
            <Flag code="GB" className="flag-icon" />
            +447946748780 <FontAwesomeIcon icon={faWhatsapp} /> <FontAwesomeIcon icon={faViber} />
          </div>
        </div>
        <div className="headerbar-cta">
  <button className="make-inquiry-btn">Make Inquiry</button>
</div>
      </div>
    </div>
  );
};
export default Headerbar;
