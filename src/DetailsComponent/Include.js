import React from 'react';
const Include = ({ items }) => {
  return (
    <div>
      <h2>Included Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Include;
