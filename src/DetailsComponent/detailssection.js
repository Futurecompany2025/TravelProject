import React from 'react';
const DetailsSection = ({ overview, itinerary, includes, costDates, usefulInfo, gallery, faqs }) => {
  return (
    <div>
      <div id="overview">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
      <div id="itinerary">
        <h2>Itinerary</h2>
        <p>{itinerary}</p>
      </div>
      <div id="includes">
        <h2>Includes</h2>
        <p>{includes}</p>
      </div>
      <div id="cost-dates">
        <h2>Cost & Dates</h2>
        <p>{costDates}</p>
      </div>
      <div id="useful-info">
        <h2>Useful Info</h2>
        <p>{usefulInfo}</p>
      </div>
      <div id="gallery">
        <h2>Gallery</h2>
        <p>{gallery}</p>
      </div>
      <div id="faqs">
        <h2>FAQs</h2>
        <p>{faqs}</p>
      </div>
    </div>
  );
}

export default DetailsSection;
