import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/Headbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const OurTeam = () => {
  return (
    <div>
      <Headerbar />
      <Navbar />
      <HeaderSection />
      <TeamGridSection />
      <Footer />
    </div>
  );
}

const HeaderSection = () => {
  return (
    <header className="team-header" style={{ 
      backgroundImage: `url(${require('../assets/img/hero/1.jpg')})`,
      backgroundSize: 'cover', // Ensure full width coverage
      backgroundPosition: 'center', // Center the image
      textAlign: 'center', // Center align text
      color: 'white', // Text color
      paddingTop: '50px', // Adjust vertical padding as needed
      paddingBottom: '50px',
    }}>
      <h1 className="text-white mb-4">Our Team</h1>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-white">Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/OurTeam" }} className="text-white">Our Team</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </header>
  );
}
const TeamGridSection = () => {
  // Dummy data for team members
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO', image: '' },
    { id: 2, name: 'Jane Smith', role: 'CTO', image: '' },
    { id: 3, name: 'Michael Brown', role: 'CFO', image: '' },
    { id: 4, name: 'Emily Davis', role: 'COO', image: '' },
    { id: 5, name: 'David Wilson', role: 'CMO', image: '' },
    { id: 6, name: 'Sarah Johnson', role: 'CIO', image: '' },
    // Add image paths for other team members
  ];
  
  return (
    <div className="team-grid-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="container">
        <h2 className="text-center mb-4">Teams</h2>
        <div className="row">
          {teamMembers.map(member => (
            <div key={member.id} className="col-md-4 mb-3">
              <div className="card">
                {/* Placeholder image */}
                <img src={require('../assets/img/hero/1.jpg')} alt={member.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
