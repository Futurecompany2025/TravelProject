import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailsSection = ({ overview, itinerary, includes, costDates, usefulInfo, gallery, faqs }) => {
  return (
    <div className="container">
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>Itinerary</h2>
          <p>{itinerary}</p>
        </div>
      </div>
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>Includes</h2>
          <p>{includes}</p>
        </div>
      </div>
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>Cost & Dates</h2>
          <p>{costDates}</p>
        </div>
      </div>
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>Useful Info</h2>
          <p>{usefulInfo}</p>
        </div>
      </div>
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>Gallery</h2>
          <p>{gallery}</p>
        </div>
      </div>
      <div className="row recommendation-details mb-4">
        <div className="col-12">
          <h2>FAQs</h2>
          <p>{faqs}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
