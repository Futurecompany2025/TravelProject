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
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      textAlign: 'center', 
      color: 'white', 
      paddingTop: '50px', 
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
    // { id: 1, name: 'Ambika Khanal', role: 'Managing Director', image: require('../assets/img/team/1.png') },
    { id: 2, name: 'Rabindra Rimal', role: 'Executive', image: require('../assets/img/team/rabindra.jpeg') },
    { id: 3, name: 'Sharleen Bland', role: 'Representative', image: require('../assets/img/team/shaleen.jpeg') },
    { id: 4, name: 'Anika vander schaaf', role: 'Representative', image: require('../assets/img/team/anika.jpeg') },
    { id: 5, name: 'Deepa Khanal', role: 'Head of Account', image: require('../assets/img/team/deepa.jpeg') },
    // { id: 6, name: '', role: 'Climbings Leader', image: require('../assets/img/team/3.png') },
    { id: 7, name: 'Chandra Tamang', role: 'Trekking Guide', image: require('../assets/img/team/Chandra.jpeg') }, // Using 1.png for example
    { id: 8, name: 'Bikash Basnet', role: 'Trekking Guide', image: require('../assets/img/team/bikash.jpeg') }, // Using 2.png for example
  ];                                                                                    
  return (
    <div className="team-grid-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="container">
        <h2 className="text-center mb-4">Teams</h2>
        <div className="row">
          {teamMembers.map(member => (
            <div key={member.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={member.image} alt={member.name} className="card-img-top" />
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
