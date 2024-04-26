import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import Headerbar from '../components/header';
import './about.css'; // Import the CSS file for styling
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <div className="breadcrumb-container">
      <Breadcrumb>
  <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="breadcrumb-item orange-box">Home</Breadcrumb.Item>
  <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/about-us" }} className="breadcrumb-item orange-box">About Us</Breadcrumb.Item>
</Breadcrumb>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="text-white">J1 Trekking</h1>
        </div>
      </div>
    </div>
  </header>
  );
}
const DescriptionSection = () => {
  return (
    <div className="aboutus-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="aboutus-details">
              <h2 className="text-success">About J1 Trekking Pvt. Ltd.</h2>
              <p className="text-black mt-3">
                J1 Trekking Pvt. Ltd. is a team of experienced and passionate people. We have started our career from the root level so we know what we are offering to our valued clients.
              </p>
              <p className="text-black">
                We can help you plan hassle-free Trekking packages, Peak Climbing, Expeditions, Cultural Tours, Biking Tours, Yoga and meditation, Jungle Safari Tours, Rafting Tours, and Helicopter Tours with the best prices and value for your upcoming trip to the Himalayas. With the experience of 23 years, we are ready to help you to design your package as per your requirements. Every one of our packages is truly tailored made that our expert team is designed for all ages, groups, families, and even solo travelers. We let you choose your package and leave you freedom.
              </p>
              <p>
              Comprising a dedicated and passionate group of individuals, we are your trusted companions in exploring the world's most breathtaking landscapes. Our team members are not only experts in navigating challenging terrains but are also committed to providing an unparalleled trekking experience for our clients. Your needs, expectations, and safety are our top priorities. Our team members are not just guides; they are companions on your journey, sharing their passion for trekking and enriching your experience with their knowledge and stories.
              </p>
              <p>
              Recognizing that every trekker has unique preferences and capabilities, our team specializes in creating tailored trekking experiences. Whether you are a seasoned adventurer seeking a challenging ascent or a beginner looking for a more leisurely exploration, our team is adept at curating the perfect trek for you. On a trek and tour with our team is not just an adventure; it's an opportunity to explore the country with a group of professionals who are dedicated to making every step of your journey memorable.
              </p>
              {/* Add the rest of your text content here */}
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
            <div className="image-section">
              <img src={require('../assets/img/gallery/about.jpg')} alt="Trek Ways Nepal" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsPage;
