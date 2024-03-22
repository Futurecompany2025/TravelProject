import React from 'react';
import img from '../assets/img/hero/1.jpg';
const Recommendation = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-5">Our Recommendation</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
          <img src={require('../assets/img/hero/1.jpg').default} className="card-img-top" alt="Recommendation 1" />
            <div className="card-body">
              <h5 className="card-title">Recommendation 1 </h5>
              <p className="card-text">Description of recommendation 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="image2.jpg" className="card-img-top" alt="Recommendation 2" />
            <div className="card-body">
              <h5 className="card-title">Recommendation 2</h5>
              <p className="card-text">Description of recommendation 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="image3.jpg" className="card-img-top" alt="Recommendation 3" />
            <div className="card-body">
              <h5 className="card-title">Recommendation 3</h5>
              <p className="card-text">Description of recommendation 3.</p>
            </div>
          </div>
        </div>
        {/* Repeat the above structure for the remaining images */}
      </div>
    </div>
  );
};

export default Recommendation;
