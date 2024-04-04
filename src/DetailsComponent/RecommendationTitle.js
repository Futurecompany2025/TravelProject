import React from 'react';// Import the background image
const RecommendationTitle = ({ title,backgroundImage }) => {
  return (
    <div
      className="bg-image d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,// Set background image dynamically
        height: '300px', // Adjust height as needed
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};
export default RecommendationTitle;
