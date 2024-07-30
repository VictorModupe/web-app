import React from 'react';

function DestinationItem({ destination, onRemove, onMarkAsVisited }) {
  return (
    <li className={`destination-item ${destination.visited ? 'visited' : ''}`}>
      <h3>{destination.name}, {destination.country}</h3>
      <p>{destination.description}</p>
      <button onClick={() => onRemove(destination.id)}>Remove</button>
      <button onClick={() => onMarkAsVisited(destination.id)}>Mark as Visited</button>
    </li>
  );
}

export default DestinationItem;
