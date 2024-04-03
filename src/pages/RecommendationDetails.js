import React from 'react';
import { useParams } from 'react-router-dom';
const RecommendationDetails = () => {
  const { slug } = useParams();
  // Dummy data for demonstration
  const recommendationDetails = {
    'three-high-passes-trek': {
      title: 'Three High Passes Trek',
      description: 'This is the description for Three High Passes Trek.',
      duration: '19 Days',
      price: 'USD 1790',
      // Add more details as needed
    },
    'everest-base-camp-trek': {
      title: 'Everest Base Camp Trek',
      description: 'This is the description for Everest Base Camp Trek.',
      duration: '15 Days',
      price: 'USD 1390',
      // Add more details as needed
    },
    'annapurna-panorama-trek': {
      title: 'Annapurna Panorama Trek',
      description: 'This is the description for Annapurna Panorama Trek.',
      duration: '12 Days',
      price: 'USD 1040',
      // Add more details as needed
    },
    'ultra-luxury-trek-to-everest-base-camp': {
      title: 'Ultra-Luxury Trek to Everest Base Camp',
      description: 'This is the description for Ultra-Luxury Trek to Everest Base Camp.',
      duration: '13 Days',
      price: 'USD 5220',
      // Add more details as needed
    },
    'upper-mustang-trek': {
      title: 'Upper Mustang Trek',
      description: 'This is the description for Upper Mustang Trek.',
      duration: '16 Days',
      price: 'USD 2395',
      // Add more details as needed
    },
    'everest-base-camp-trek-with-gokyo-lake': {
      title: 'Everest Base Camp Trek with Gokyo Lake & Cho la pass',
      description: 'This is the description for Everest Base Camp Trek with Gokyo Lake & Cho la pass.',
      duration: '18 Days',
      price: 'USD 1730',
      // Add more details as needed
    }
  };
  // Fetch recommendation details based on the slug
  const recommendation = recommendationDetails[slug];
  if (!recommendation) {
    return <div>Recommendation not found</div>;
  }
  return (
    <div>
      <h2>{recommendation.title}</h2>
      <p>Description: {recommendation.description}</p>
      <p>Duration: {recommendation.duration}</p>
      <p>Price: {recommendation.price}</p>
      {/* Add more details or sections as needed */}
    </div>
  );
};
export default RecommendationDetails;
