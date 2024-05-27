import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Headerbar from '../components/Headbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import img1 from '../assets/img/blog/tibetlake.jpg';
import img2 from '../assets/img/blog/kailash.jpeg';
import img3 from '../assets/img/blog/Holi in Kathmandu .jpeg';
import img4 from '../assets/img/blog/Dingboche.jpg'; // Add the correct path to the image
import img5 from '../assets/img/blog/Dingboche.jpg'; // Add the correct path to the image
import img6 from '../assets/img/blog/Dingboche.jpg'; // Add the correct path to the image
import imgJpeg from '../assets/img/blog/Dingboche.jpg';
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
    <header className="blog-header bg-dark text-white d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${imgJpeg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
      <div className="breadcrumb-container">
      <h1>Blogs</h1>
        <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/blog" }}>Blogs</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </header>
  );
}
const GridImagesSection = () => {
  const images = [
    { src: img1, date: 'May 1, 2024', title: 'Avalanche in Manaslu Region', author: 'Menuka Simkhada', link: '/blog/1' },
    { src: img2, date: 'May 5, 2024', title: 'Another Blog Title', author: 'John Doe', link: '/blog/2' },
    { src: img3, date: 'May 10, 2024', title: 'Yet Another Blog Title', author: 'Jane Smith', link: '/blog/3' },
    { src: img4, date: 'May 15, 2024', title: 'Title Four', author: 'Author Four', link: '/blog/4' },
    { src: img5, date: 'May 20, 2024', title: 'Title Five', author: 'Author Five', link: '/blog/5' },
    { src: img6, date: 'May 25, 2024', title: 'Title Six', author: 'Author Six', link: '/blog/6' }
  ];
  return (
    <div className="grid-images-section py-5">
      <div className="container">
        <div className="row">
          {images.map((blog, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-dark text-white h-100">
                <img src={blog.src} className="card-img" alt={`Image ${index + 1}`} />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <p className="card-text text-pink">{blog.date}</p>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">By {blog.author}</p>
                  <Link to={blog.link} className="btn btn-primary mt-2">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BlogDetails;
