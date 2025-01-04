import React from 'react';
import './styles.css';
import Chatbot from './components/Chatbot';
import FlightSuggestions from './components/Flightsuggestions';
import HotelSuggestions from './components/Hotelsuggestions';
import Itinerary from './components/Itinerary';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Trip Planning Portal</h1>
      </header>
      <div className="portal">
        <Chatbot />
        <div className="suggestions">
          <FlightSuggestions />
          <HotelSuggestions />
        </div>
        <Itinerary />
      </div>
    </div>
  );
}

export default App;
