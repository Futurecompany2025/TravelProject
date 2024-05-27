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
