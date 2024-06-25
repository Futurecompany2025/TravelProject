import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Headerbar from '../components/Headbar'; // Assuming Headbar component path
import Navbar from '../components/navbar'; // Assuming Navbar component path
import Footer from '../components/footer'; // Assuming Footer component path
import backgroundImage from '../assets/img/gallery/about.jpg'; // Path to your background image
// import './PayNow.css'; // Import your custom CSS file here

const PayNow = () => {
  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="payment-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="breadcrumb-overlay">
          <Link to="/">Home</Link> / <span>Online Payment</span>
        </div>
        <h1>Online Payment</h1>
      </div>
      <div className="payment-content">
        <section className="payment-section">
          <h2>Select any of the packages*</h2>
          <div className="packages">
            <div className="package">
              <input type="radio" id="package1" name="package" value="Everest Three High Passes Trek" />
              <label htmlFor="package1">Everest Three High Passes Trek</label>
            </div>
            <div className="package">
              <input type="radio" id="package2" name="package" value="Annapurna Circuit Trek" />
              <label htmlFor="package2">Annapurna Circuit Trek</label>
            </div>
            <div className="package">
              <input type="radio" id="package3" name="package" value="Langtang Valley Trek" />
              <label htmlFor="package3">Langtang Valley Trek</label>
            </div>
            {/* Add more packages as needed */}
          </div>
          <form className="payment-form">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button className="pay-now-btn">Pay Now</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PayNow;
