import React from 'react';

const UsefulInfoMap = ({ mapUrl }) => {
  return (
    <div>
      <h2>Useful Information Map</h2>
      <img src={mapUrl} alt="Map" />
    </div>
  );
};

export default UsefulInfoMap;
