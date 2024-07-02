import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/Headbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Documents.css'; // Custom CSS for additional styling

const Documents = () => {
  return (
    <div>
      <Headerbar />
      <Navbar />
      <HeaderSection />
      <DocumentContent />
      <Footer />
    </div>
  );
};

const HeaderSection = () => {
  return (
    <header className="documents-header text-center text-white" style={{ 
      backgroundImage: `url(${require('../assets/img/hero/1.jpg')})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      padding: '50px 0',
    }}>
      <h1 className="mb-4">Documents</h1>
      <Breadcrumb className="d-flex justify-content-center">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-white">Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/documents" }} className="text-white">Documents</Breadcrumb.Item>
      </Breadcrumb>
    </header>
  );
};

const DocumentContent = () => {
  const document = { id: 1, title: 'Document 1', image: require('../assets/img/documents/doc1.jpeg') };

  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">Our Document</h2>
      <div className="document-item mx-auto">
        <img src={document.image} alt={document.title} className="document-image mb-3" />
        <h5 className="document-title">{document.title}</h5>
      </div>
    </div>
  );
};

export default Documents;
