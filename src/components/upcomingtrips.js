import React, { useState } from 'react';
import './upcomingtrips.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const JoinUpcomingTrips = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleJoinClick = (trip) => {
    setSelectedTrip(trip);
    setShowBookingForm(true);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Join Upcoming Trips</h2>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>TRIP NAME</th>
              <th>PRICE</th>
              <th>DURATION</th>
              <th>DEPARTURE DATE</th>
              <th>TRIP STATUS</th>
              <th></th>
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
                <td>
                  <button className="btn btn-primary" onClick={() => handleJoinClick(trip)}>
                    Join Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showBookingForm && (
        <BookingForm trip={selectedTrip} onClose={() => setShowBookingForm(false)} />
      )}
    </div>
  );
};

const BookingForm = ({ trip, onClose }) => {
  return (
    <div className="booking-form">
      <h2>Booking Form for {trip.tripName}</h2>
      {/* Your form elements go here */}
      <button className="btn btn-secondary" onClick={onClose}>Close</button>
    </div>
  );
};

export default JoinUpcomingTrips;
