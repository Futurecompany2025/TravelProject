import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <p>- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
