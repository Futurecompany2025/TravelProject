import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
const BlogDetails = () => {
  return (
    <div>
      <Headerbar />
      <Navbar /> 
      <HeaderSection />
      <GridImagesSection />
      <Footer /> 
    </div>
  );
}
const HeaderSection = () => {
  return (
    <header className="blog-header" style={{ backgroundImage: `url(${require('../assets/img/gallery/img.jpeg')})` }}>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/blogs" }} active>Blogs</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h1 className="text-white">Blogs</h1>
    </header>
  );
}

const GridImagesSection = () => {
  // Dummy data for grid images
  const images = [...Array(16).keys()];
  return (
    <div className="grid-images-section">
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-3 mb-3">
              <img src={`image-${index}.jpg`} alt={`Image ${index}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BlogDetails;
