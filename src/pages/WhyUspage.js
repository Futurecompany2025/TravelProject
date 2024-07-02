import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/Headbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './WhyUs.css'; // Import the CSS file for this page

const WhyUsPage = () => {
  return (
    <div>
      <Headerbar />
      <Navbar />
      <HeaderSection />
      <WhyUsContent />
      <Footer />
    </div>
  );
};

const HeaderSection = () => {
  return (
    <header className="whyus-header text-center text-white" style={{ 
      backgroundImage: `url(${require('../assets/img/hero/1.jpg')})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      padding: '50px 0',
    }}>
      <h1 className="mb-4">Why Us</h1>
      <Breadcrumb className="d-flex justify-content-center">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-white">Home</Breadcrumb.Item>
        <Breadcrumb.Item active className="text-white">Why Us</Breadcrumb.Item>
      </Breadcrumb>
    </header>
  );
};

const WhyUsContent = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 font-weight-bold">
        Why Do you Choose J1 Trekking and Expedition Pvt. Ltd for Your Next Adventure?
      </h2>
      <p className="text-center">
        Trek Ways Nepal is a locally based company led by 25 years of field experience expertise. Here are thousands of tour companies in Nepal and it is important to pick the right company that provides personal, professional, safe services that change your life experience. We do focus on how our customers can benefit from our services. Check below points why you should choose Trek Ways Nepal Pvt. Ltd.
      </p>
    </div>
  );
};

export default WhyUsPage;
