import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import Headerbar from '../components/Headbar';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './about.css'; // Import the CSS file for styling
const AboutUsPage = () => {
  return (
    <>
      <Headerbar />
      <Navbar /> 
      <HeaderSection />
      <DescriptionSection />
      <ImageSection />
      <Footer /> 
    </>
  );
}

const HeaderSection = () => {
  return (
    <header className="aboutus-header" style={{ backgroundImage: `url(${require('../assets/img/gallery/img3.jpg')})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="text-white">About Us</h1>
            <div className="breadcrumb-container">
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="breadcrumb-item-custom">Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/about-us" }} className="breadcrumb-item-custom">About Us</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const DescriptionSection = () => {
  return (
    <div className="aboutus-section">
      <div className="container py-5"> {/* Added vertical padding */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="aboutus-details">
              <h2 className="text-success">About J1 Trekking Pvt. Ltd.</h2>
              <p className="text-black mt-3">
                J1 Trekking Pvt. Ltd. is a team of experienced and passionate people. We have started our career from the root level so we know what we are offering to our valued clients.
              </p>
              {/* Rest of the content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ImageSection = () => {
  return (
    <div className="aboutus-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="image-section py-5"> {/* Added vertical padding */}
              <img src={require('../assets/img/gallery/about.jpg')} alt="Trek Ways Nepal" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsPage;
