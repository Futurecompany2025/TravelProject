// Itinerary.js
import React, { useState } from 'react';
import './itinerary.css'; // Import the CSS file
const Itinerary = ({ itineraryData }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const handleClick = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };
  return (
    <div className="itinerary-container">
      <div className="itinerary-box">
        <h2>Itinerary</h2>
        {itineraryData.map((dayInfo) => (
          <div key={dayInfo.day} className={`day-info ${selectedDay === dayInfo.day ? 'selected' : ''}`} onClick={() => handleClick(dayInfo.day)}>
            <h3>Day {dayInfo.day}</h3>
            <p>{dayInfo.destination}</p>
            {selectedDay === dayInfo.day && (
              <div className="day-description">
                <p>{dayInfo.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Itinerary;
