import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Headerbar from '../../components/Headbar';
import Footer from '../../components/footer';
import './AnnapurnaBaseCampHelicopter.css'; // Make sure to import the CSS file
import {
  AttachMoney, DirectionsWalk, CalendarToday, Height, LocationOn, Flight, Grade, Hotel, DateRange
} from '@mui/icons-material';
import backgroundImage from '../../assets/img/hero/1.jpg';
const annapurnaTourDetails = {
  title: 'Annapurna Base Camp Helicopter Tour',
  backgroundImage: backgroundImage,
  price: 'USD 1000',
  overview: 'Join us for an unforgettable helicopter tour to Annapurna Base Camp...',
  itinerary: [
    'Day 1: Early morning flight from Pokhara to Annapurna Base Camp',
    'Day 1: Explore and enjoy the panoramic views at Annapurna Base Camp',
    'Day 1: Return flight to Pokhara by afternoon'
  ],
  includes: 'Helicopter ride, all necessary permits.',
  costDates: 'Available year-round, weather permitting.',
  usefulInfo: 'Please bring warm clothing and your camera.',
  gallery: 'Stunning views of the Annapurna range and the helicopter tour.'
};

const AnnapurnaBaseCampHelicopter = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    contactNo: '',
    noOfTraveller: '',
    passportNo: '',
    arrivalDate: '',
    specialRequirement: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/submit-form', formData);
      console.log('Form submitted:', response.data);
      // Optionally, you can clear the form fields after submission
      setFormData({
        name: '',
        country: '',
        email: '',
        contactNo: '',
        noOfTraveller: '',
        passportNo: '',
        arrivalDate: '',
        specialRequirement: '',
        message: ''
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Headerbar />
      <Navbar />
      <div className="annapurna-tour-header" style={{ backgroundImage: `url(${annapurnaTourDetails.backgroundImage})` }}>
        <h1>{annapurnaTourDetails.title}</h1>
      </div>
      <div className="annapurna-tour-details-wrapper">
        {/* Tour details columns */}
      </div>
      <div className="details-scroll-box">
        {/* Scrollable section titles */}
      </div>
      <div className="annapurna-tour-content">
        {/* Main content sections */}
      </div>
      <aside className="annapurna-tour-aside">
        <div className="tour-info-box">
          <h2>{annapurnaTourDetails.title}</h2>
          <p>Price starts from <span className="tour-price">{annapurnaTourDetails.price}</span></p>
          <button className="book-now-btn" onClick={() => scrollToSection('form-section')}>Book Now</button>
        </div>
      </aside>
      {/* Form section */}
      <section id="form-section" className="form-section">
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
          <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          <input type="text" name="contactNo" placeholder="Contact Number" value={formData.contactNo} onChange={handleInputChange} required />
          <input type="text" name="noOfTraveller" placeholder="Number of Travelers" value={formData.noOfTraveller} onChange={handleInputChange} required />
          <input type="text" name="passportNo" placeholder="Passport Number" value={formData.passportNo} onChange={handleInputChange} />
          <input type="date" name="arrivalDate" placeholder="Arrival Date" value={formData.arrivalDate} onChange={handleInputChange} required />
          <textarea name="specialRequirement" placeholder="Special Requirements" value={formData.specialRequirement} onChange={handleInputChange}></textarea>
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};
export default AnnapurnaBaseCampHelicopter;
