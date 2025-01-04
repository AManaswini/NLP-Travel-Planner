import React, { useState, useEffect } from 'react';

function Itinerary() {
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    const itineraryData = [
      { day: 1, activities: 'Visit Museum, Explore Downtown' },
      { day: 2, activities: 'Beach Day, Sunset Cruise' },
      { day: 3, activities: 'Hiking in the Mountains' },
    ];
    setItinerary(itineraryData);
  }, []);

  return (
    <div className="itinerary">
      <h2>Itinerary</h2>
      {itinerary.length ? (
        <ul>
          {itinerary.map((item, index) => (
            <li key={index}>
              Day {item.day}: {item.activities}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading itinerary...</p>
      )}
    </div>
  );
}

export default Itinerary;
