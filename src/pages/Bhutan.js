// src/pages/Bhutan.js
import React from 'react';
import Navbar from '../components/navbar';
import Headerbar from '../components/Headbar';
import Footer from '../components/footer';
import img1 from '../assets/img/destinations/Bhutan/bhutan.jpg';
import img2 from '../assets/img/destinations/Bhutan/Gangtey.jpeg';
function Bhutan() {
    return (
      <>
        <Headerbar />
        <Navbar />
        <div style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Bhutan</h2>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 mb-4 text-center">
                <img src={img1} alt="Bhutan 1" className="img-fluid rounded" />
                <p className="mt-2">Bhutan Cultural Tours</p>
              </div>
              <div className="col-md-6 mb-4 text-center">
                <img src={img2} alt="Bhutan 2" className="img-fluid rounded" />
                <p className="mt-2">Yoga and Retreat in Bhutan</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  export default Bhutan;