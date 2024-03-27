import React from 'react';
import './upcomingtrips.css';
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

const handleJoinClick = (trip) => {
  alert(`You've clicked Join Now for "${trip.tripName}"`);
};
const JoinUpcomingTrips = () => {
  return (
    <div className="container"> {/* Use Bootstrap container class */}
      <h2 className="upcoming-trips-heading">Join Upcoming Trips</h2>
      <table className="table"> {/* Use Bootstrap table class */}
        <thead>
          <tr>
            <th className="grid-header">TRIP NAME</th>
            <th className="grid-header">PRICE</th>
            <th className="grid-header">DURATION</th>
            <th className="grid-header">DEPARTURE DATE</th>
            <th className="grid-header">TRIP STATUS</th>
            <th className="grid-header"></th> {/* Empty header for button */}
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <React.Fragment key={index}>
              <tr className="trip-item">
                <td>{trip.tripName}</td>
                <td>{trip.price}</td>
                <td>{trip.duration}</td>
                <td>{trip.departureDate}</td>
                <td>{trip.status}</td>
                <td></td> {/* Empty cell */}
                <td>
                  <button className="btn btn-primary" onClick={() => handleJoinClick(trip)}>
                    Join Now
                  </button>
                </td>
              </tr>
              
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default JoinUpcomingTrips;
