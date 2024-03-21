import React from 'react';
import './JoinUpcomingTrips.css';
const JoinUpcomingTrips = () => {
  const trips = [
    {
      tripName: "Everest Base Camp Trek - 15",
      price: "USD 1490",
      duration: "15 Days",
      departureDate: "04 Apr, 2024 - 18 Apr, 2024",
      status: "Confirmed"
    },
    {
      tripName: "Ultra - Luxury Trek to Everest Base Camp - 13",
      price: "USD",
      duration: "13 Days",
      departureDate: "11 Apr, 2024 - 23 Apr, 2024",
      status: "Confirmed"
    },
    {
      tripName: "Ultra - Luxury Trek to Everest Base Camp - 13",
      price: "USD",
      duration: "13 Days",
      departureDate: "18 Apr, 2024 - 30 Apr, 2024",
      status: "Confirmed"
    },
    {
      tripName: "Kailash Mansarovar Yatra - 13",
      price: "USD 2480",
      duration: "13 Days",
      departureDate: "20 Apr, 2024 - 02 May, 2024",
      status: "Available"
    },
    {
      tripName: "Kailash Mansarovar Yatra - 13",
      price: "USD 2480",
      duration: "13 Days",
      departureDate: "22 Apr, 2024 - 04 May, 2024",
      status: "Available"
    },
    {
      tripName: "Ultra - Luxury Trek to Everest Base Camp - 13",
      price: "USD",
      duration: "13 Days",
      departureDate: "25 Apr, 2024 - 07 May, 2024",
      status: "Confirmed"
    },
    {
      tripName: "Everest View Trek - 8",
      price: "USD 1190",
      duration: "8 Days",
      departureDate: "25 Apr, 2024 - 02 May, 2024",
      status: "Confirmed"
    },
    // Add more trip data as needed
  ];

  return (
    <div>
      <h2>Join Upcoming Trips</h2>
      <table>
        <thead>
          <tr>
            <th>TRIP NAME</th>
            <th>PRICE</th>
            <th>DURATION</th>
            <th>DEPARTURE DATE</th>
            <th>TRIP STATUS</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <tr key={index}>
              <td>{trip.tripName}</td>
              <td>{trip.price}</td>
              <td>{trip.duration}</td>
              <td>{trip.departureDate}</td>
              <td>{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JoinUpcomingTrips;
