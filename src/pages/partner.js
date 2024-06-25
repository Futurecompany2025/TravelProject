import React from 'react';
import Headerbar from '../components/Headbar'; // Assuming Headbar component path
import Navbar from '../components/navbar'; // Assuming Navbar component path
import Footer from '../components/footer'; // Assuming Footer component path
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/img/gallery/PARTNER.jpg'; // Path to your background image
import './PartnerWithUs.css'; // Import your custom CSS file here
const PartnerWithUs = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="partner-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="breadcrumb-overlay">
          <Link to="/">Home</Link> / <span onClick={() => scrollToSection('partner-section')}>Partner with Us</span>
        </div>
        <h1>Partner with Us</h1>
      </div>
      <div className="partner-content">
        <section id="partner-section" className="partner-section">
          <h2>Partnership with J One Trekking And Expedition</h2>
          <p><strong>J One Trekking And Expedition</strong> and its professional team have 24 years of experience in the industry. We have put our soul and heart into tourism. We work very hard to ensure that our customers return home with the best travel experience. We would like to expand our business network, so we always welcome new partners from all over the world.</p>
          <p>We are always available to partner with:</p>
          <ul>
            <li>Luxury and deluxe trek and tours organizers</li>
            <li>Yoga Trek organizers</li>
            <li>Helicopter Tour organizers</li>
            <li>Adventure and tour operators</li>
            <li>Trekking and Climbing operators</li>
            <li>Volunteering organizations</li>
            <li>Jungle Safari and wildlife tourism organizers</li>
            <li>Destination management companies</li>
            <li>Team building organizers</li>
            <li>Schools, universities, and charities organizations</li>
            <li>Special event organizers</li>
            <li>Family trip organizers</li>
            <li>Mountain Biking and Cycling tour organizers</li>
            <li>Motor Bike tour organizers</li>
            <li>Cultural tourism organizations</li>
            <li>Water Rafting and Bungee Jumping organizers</li>
            <li>Paragliding and Sky Diving organizers</li>
          </ul>
          <h3>Why should you partner with Trek Ways Nepal?</h3>
          <ul>
            <li>Minimum 10 years experienced and expert Guides</li>
            <li>Dedicated and strong team of experts</li>
            <li>Destination experts</li>
            <li>Personally tailored itineraries</li>
            <li>Chain of accommodation and service providers</li>
            <li>We are available 24/7</li>
            <li>24/7 on-ground support in Nepal</li>
            <li>Best price Guaranteed</li>
            <li>Personal care & attention</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
