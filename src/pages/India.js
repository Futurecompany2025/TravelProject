// src/pages/India.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Headerbar from '../components/Headbar';
import Footer from '../components/footer';
import img1 from '../assets/img/destinations/India/GoldenTriangle.jpg';
function India() {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore India</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <img src={img1} alt="India 1" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default India;
