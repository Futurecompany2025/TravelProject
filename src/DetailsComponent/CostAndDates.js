import React from 'react';
const CostAndDates = ({ cost, dates }) => {
  return (
    <div>
      <h2>Cost and Dates</h2>
      <p>Cost: {cost}</p>
      <p>Dates:</p>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};
export default CostAndDates;
