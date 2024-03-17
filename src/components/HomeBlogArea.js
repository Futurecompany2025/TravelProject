import React from 'react';

function HomeBlogArea() {
  return (
    <div className="home-blog-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Our Recent news</span>
              <h2>Tourist Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Blog Post */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/blog/home-blog1.jpg" alt=""/>
                </div>
                <div className="blog-cap">
                  <p> | Traveling</p>
                  <h3><a href="single-blog.html">Tips For Taking A Long-Term Trip With Kids.</a></h3>
                  <a href="#" className="more-btn">Read more »</a>
                </div>
              </div>
              <div className="blog-date text-center">
                <span>24</span>
                <p>Now</p>
              </div>
            </div>
          </div>
          {/* Add more blog posts here */}
        </div>
      </div>
    </div>
  );
}

export default HomeBlogArea;
