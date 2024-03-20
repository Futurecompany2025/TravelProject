import React from 'react';
function HomeBlogArea() {
  return (
    <div className="home-blog-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Blogs</span>
            </div>
          </div>
        </div>
        <div className="row">
          {/* First Blog Post */}
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  {/* Add your image source here */}
                  <img src="assets/img/blog/home-blog1.jpg" alt=""/>
                </div>
                <div className="blog-cap">
                  <p>Traveling</p>
                  <h3><a href="single-blog.html"></a></h3>
                  <a href="#" className="more-btn">Read more »</a>
                </div>
              </div>
              {/* Date section */}
              <div className="blog-date text-center">
                <span>24</span>
                <p>Now</p>
              </div>
            </div>
          </div>
          {/* Second Blog Post */}
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  {/* Add your image source here */}
                  <img src="assets/img/blog/home-blog2.jpg" alt=""/>
                </div>
                <div className="blog-cap">
                  <p>Traveling</p>
                  <h3><a href="single-blog.html"></a></h3>
                  <a href="#" className="more-btn">Read more »</a>
                </div>
              </div>
              {/* Date section */}
              <div className="blog-date text-center">
                <span>24</span>
                <p>Now</p>
              </div>
            </div>
          </div>
          {/* Third Blog Post */}
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  {/* Add your image source here */}
                  <img src="assets/img/blog/home-blog3.jpg" alt=""/>
                </div>
                <div className="blog-cap">
                  <p>Traveling</p>
                  <h3><a href="single-blog.html"></a></h3>
                  <a href="#" className="more-btn">Read more »</a>
                </div>
              </div>
              {/* Date section */}
              <div className="blog-date text-center">
                <span>24</span>
                <p>Now</p>
              </div>
            </div>
          </div>
        </div>
        {/* More Blogs Button */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="#" className="btn btn-primary">More Blogs</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeBlogArea;