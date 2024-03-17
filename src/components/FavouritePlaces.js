import React from 'react';
function FavouritePlaces() {
  return (
    <div className="favourite-place place-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>FEATURED TOURS Packages</span>
              <h2>Favourite Places</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Featured Place 1 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-place mb-30">
              <div className="place-img">
                <img src="service1.jpg" alt="Service 1"/>
              </div>
              <div className="place-cap">
                <div className="place-cap-top">
                  <span><i className="fas fa-star"></i><span>8.0 Superb</span></span>
                  <h3><a href="#">The Dark Forest Adventure</a></h3>
                  <p className="dolor">$1870 <span>/ Per Person</span></p>
                </div>
                <div className="place-cap-bottom">
                  <ul>
                    <li><i className="far fa-clock"></i>3 Days</li>
                    <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Place 2 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-place mb-30">
              <div className="place-img">
                <img src="service2.jpg" alt="Service 2"/>
              </div>
              <div className="place-cap">
                <div className="place-cap-top">
                  <span><i className="fas fa-star"></i><span>8.0 Superb</span></span>
                  <h3><a href="#">The Dark Forest Adventure</a></h3>
                  <p className="dolor">$1870 <span>/ Per Person</span></p>
                </div>
                <div className="place-cap-bottom">
                  <ul>
                    <li><i className="far fa-clock"></i>3 Days</li>
                    <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Place 3 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-place mb-30">
              <div className="place-img">
                <img src="service3.jpg" alt="Service 3"/>
              </div>
              <div className="place-cap">
                <div className="place-cap-top">
                  <span><i className="fas fa-star"></i><span>8.0 Superb</span></span>
                  <h3><a href="#">The Dark Forest Adventure</a></h3>
                  <p className="dolor">$1870 <span>/ Per Person</span></p>
                </div>
                <div className="place-cap-bottom">
                  <ul>
                    <li><i className="far fa-clock"></i>3 Days</li>
                    <li><i className="fas fa-map-marker-alt"></i>Los Angeles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Add more Featured Places as needed */}
        </div>
      </div>
    </div>
  );
}

export default FavouritePlaces;
