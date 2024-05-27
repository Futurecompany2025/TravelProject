// src/pages/Tibet.js
import React from 'react';
import img1 from '../assets/img/destinations/tibet/kailash .jpeg';
import img2 from '../assets/img/destinations/tibet/portala.jpg';
import Navbar from '../components/navbar';
import Headerbar from '../components/Headbar';
import Footer from '../components/footer';
function Tibet() {
  return (
    <>
      <Headerbar />
      <Navbar />
      <div style={{ backgroundColor: '#e8ebf3', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Tibet</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src={img1} alt="Tibet 1" className="img-fluid rounded" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="col-md-6 mb-4">
              <img src={img2} alt="Tibet 2" className="img-fluid rounded" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Tibet;
