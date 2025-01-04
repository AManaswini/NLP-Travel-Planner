import React, { useState, useEffect } from 'react';

function FlightSuggestions() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const flightData = [
      { airline: 'Airline A', price: '$300', destination: 'City A' },
      { airline: 'Airline B', price: '$350', destination: 'City B' },
      { airline: 'Airline C', price: '$400', destination: 'City C' },
    ];
    setFlights(flightData);
  }, []);

  return (
    <div className="flight-suggestions">
      <h2>Flight Suggestions</h2>
      {flights.length ? (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              {flight.airline} - {flight.price} to {flight.destination}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading flights...</p>
      )}
    </div>
  );
}

export default FlightSuggestions;
