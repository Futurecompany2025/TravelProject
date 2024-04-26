import React from 'react';
import '../DetailsComponent/detailssection.css';
const RecommendationAdditionalDetails = ({
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
}) => {
  return (
    <div className="recommendation-details">
      <div className="details-grid">
        <div className="detail-item">
          <h3>Price starts from</h3>
          <p>{price}</p>
        </div>
        <div className="detail-item">
          <h3>Meal</h3>
          <p>{meal}</p>
        </div>
        <div className="detail-item">
          <h3>Start & End Point</h3>
          <p>{startEndPoints}</p>
        </div>
        <div className="detail-item">
          <h3>Transportation</h3>
          <p>{transportation}</p>
        </div>
        <div className="detail-item">
          <h3>Accommodations</h3>
          <p>{accommodations}</p>
        </div>
        <div className="detail-item">
          <h3>Activity</h3>
          <p>{activity}</p>
        </div>
        <div className="detail-item">
          <h3>Max Altitude</h3>
          <p>{maxAltitude}</p>
        </div>
        <div className="detail-item">
          <h3>Distance</h3>
          <p>{distance}</p>
        </div>
        <div className="detail-item">
          <h3>Trip Grade</h3>
          <p>{tripGrade}</p>
        </div>
        <div className="detail-item">
          <h3>Best Time</h3>
          <p>{bestTime}</p>
        </div>
      </div>
      {/* Include Overview component here */}
    </div>
  );
};

export default RecommendationAdditionalDetails;
