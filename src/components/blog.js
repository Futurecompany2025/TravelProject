<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ imgSrc, altText, title, date }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4">
      <div className="home-blog-single mb-30">
        <div className="blog-img-cap">
          <div className="blog-img">
            <img src={imgSrc} alt={altText} />
          </div>
          <div className="blog-cap">
            <p>Traveling</p>
            <h3><a href="single-blog.html">{title}</a></h3>
            <a href="#" className="more-btn">Read more »</a>
          </div>
        </div>
        <div className="blog-date text-center">
          <span>{date}</span>
          <p>Now</p>
        </div>
      </div>
    </div>
  );
}

function HomeBlogArea() {
  return (
    <div className="home-blog-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <h2 style={{ fontSize: '100px', color: 'Purple' }}>Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* First Blog Post */}
          <BlogPost 
            imgSrc={require("../assets/img/gallery/img.jpeg")} 
            altText="Traveling"
            title="Tips For Taking A Long-Term Trip With Kids."
            date="24" 
          />
          {/* Second Blog Post */}
          <BlogPost 
            imgSrc={require("../assets/img/gallery/img2.jpg")} 
            altText="Traveling"
            title="Tips For Taking A Long-Term Trip With Kids."
            date="24" 
          />
          {/* Third Blog Post */}
          <BlogPost 
            imgSrc={require("../assets/img/gallery/img3.jpg")} 
            altText="Traveling"
            title="Tips For Taking A Long-Term Trip With Kids."
            date="24" 
          />
        </div>
        {/* More Blogs Button */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <Link to="/blog" className="btn btn-primary">More Blogs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogArea;
=======
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ imgSrc, altText, title, date }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4">
      <div className="home-blog-single mb-30">
        <div className="blog-img-cap">
          <div 
            className="blog-img" 
            style={{ height: '500px', overflow: 'hidden' }} // Increase height here for a longer display
          >
            <img 
              src={imgSrc} 
              alt={altText} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="blog-cap">
            <p style={{ color: 'yellow' }}>Traveling</p> {/* Set text color to yellow */}
            <h3>
              <a href="single-blog.html" style={{ color: 'yellow' }}>{title}</a> {/* Set title color to yellow */}
            </h3>
            <a href="#" className="more-btn" style={{ color: 'yellow' }}>Read more »</a> {/* Set link color to yellow */}
          </div>
        </div>
        <div className="blog-date text-center">
          <span style={{ color: 'yellow' }}>{date}</span> {/* Set date color to yellow */}
          <p style={{ color: 'yellow' }}>Now</p> {/* Set 'Now' text color to yellow */}
        </div>
      </div>
    </div>
  );
}

function HomeBlogArea() {
  return (
    <div className="home-blog-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <h2 style={{ fontSize: '100px', color: 'Purple' }}>Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* First Blog Post */}
          <BlogPost 
            imgSrc={require("../assets/img/gallery/img.jpeg")} 
            altText="Traveling"
            title="Tips For Taking A Long-Term Trip With Kids."
            date="24" 
          />
          {/* Second Blog Post */}
          <BlogPost 
            imgSrc={require("../assets/img/gallery/img.jpeg")} 
            altText="Traveling"
            title="Tips For Taking A Long-Term Trip With Kids."
            date="24" 
          />
          {/* Third Blog Post */}
          <BlogPost 
            imgSrc={require("../assets/img/gallery/img3.jpg")} 
            altText="Traveling"
            title="Tips For Taking A Long-Term Trip With Kids."
            date="24" 
          />
        </div>
        {/* More Blogs Button */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <Link to="/blog" className="btn btn-primary">More Blogs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogArea;
>>>>>>> e8a3bcc (Initial commit on shikhar branch)
