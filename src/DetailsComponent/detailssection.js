import React from 'react';

const DetailsSection = ({
  price,
  meal,
  startEndPoints,
  transportation,
  accommodations,
  activity,
  maxAltitude,
  distance,
  tripGrade,
  bestTime,
  overview,
  itinerary,
  includes,
  costDates,
  usefulInfo,
  gallery,
  reviews,
  faqs
}) => {
  return (
    <div>
      <h2>Details</h2>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Meal:</strong> {meal}</p>
      <p><strong>Start/End Points:</strong> {startEndPoints}</p>
      <p><strong>Transportation:</strong> {transportation}</p>
      <p><strong>Accommodations:</strong> {accommodations}</p>
      <p><strong>Activity:</strong> {activity}</p>
      <p><strong>Max Altitude:</strong> {maxAltitude}</p>
      <p><strong>Distance:</strong> {distance}</p>
      <p><strong>Trip Grade:</strong> {tripGrade}</p>
      <p><strong>Best Time:</strong> {bestTime}</p>
      <div>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div>
        <h3>Itinerary</h3>
        <p>{itinerary}</p>
      </div>
      <div>
        <h3>Includes</h3>
        <p>{includes}</p>
      </div>
      <div>
        <h3>Cost & Dates</h3>
        <p>{costDates}</p>
      </div>
      <div>
        <h3>Useful Info</h3>
        <p>{usefulInfo}</p>
      </div>
      <div>
        <h3>Gallery</h3>
        <p>{gallery}</p>
      </div>
      <div>
        <h3>Reviews</h3>
        <p>{reviews}</p>
      </div>
      <div>
        <h3>FAQs</h3>
        <p>{faqs}</p>
      </div>
    </div>
  );
};

export default DetailsSection;
