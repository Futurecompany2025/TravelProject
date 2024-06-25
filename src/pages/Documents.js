import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/Headbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const Documents = () => {
  return (
    <div>
      <Headerbar />
      <Navbar />
      <HeaderSection />
      <DocumentsContent />
      <Footer />
    </div>
  );
};
const HeaderSection = () => {
  return (
    <header className="documents-header" style={{ 
      backgroundImage: `url(${require('../assets/img/hero/1.jpg')})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      textAlign: 'center', 
      color: 'white', 
      paddingTop: '50px', 
      paddingBottom: '50px',
    }}>
      <h1 className="text-white mb-4">Documents</h1>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-white">Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/documents" }} className="text-white">Documents</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </header>
  );
};
const DocumentsContent = () => {
  const document = { id: 1, title: 'Document 1', image: require('../assets/img/documents/doc1.jpeg') };
  return (
    <div className="documents-content" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="container">
        <h2 className="text-center mb-4">Our Documents</h2>
        <div className="document-card">
          <img src={document.image} alt={document.title} className="document-img" />
          <div className="document-title">
            <h5>{document.title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Documents;
