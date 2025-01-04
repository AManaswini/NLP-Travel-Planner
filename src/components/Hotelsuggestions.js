import React, { useState, useEffect } from 'react';

function HotelSuggestions() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const hotelData = [
      { name: 'Hotel A', price: '$150/night', location: 'Location A' },
      { name: 'Hotel B', price: '$200/night', location: 'Location B' },
      { name: 'Hotel C', price: '$180/night', location: 'Location C' },
    ];
    setHotels(hotelData);
  }, []);

  return (
    <div className="hotel-suggestions">
      <h2>Hotel Suggestions</h2>
      {hotels.length ? (
        <ul>
          {hotels.map((hotel, index) => (
            <li key={index}>
              {hotel.name} - {hotel.price} in {hotel.location}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading hotels...</p>
      )}
    </div>
  );
}

export default HotelSuggestions;
