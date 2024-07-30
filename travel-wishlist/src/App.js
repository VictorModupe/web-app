import React, { useState } from 'react';

function App() {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Paris', country: 'France', description: 'City of Love', visited: false },
    { id: 2, name: 'Tokyo', country: 'Japan', description: 'Land of the Rising Sun', visited: false },
    { id: 3, name: 'New York', country: 'USA', description: 'The Big Apple', visited: false },
    { id: 4, name: 'Sydney', country: 'Australia', description: 'Harbor City', visited: false },
    { id: 5, name: 'Cape Town', country: 'South Africa', description: 'Mother City', visited: false }
  ]);

  // ... other logic and components

  return (
    <div>
      <h1>Travel Destinations</h1>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            <h2>{destination.name}, {destination.country}</h2>
            <p>{destination.description}</p>
            <p>{destination.visited ? 'Visited' : 'Not Visited'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
