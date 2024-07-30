import React, { useState } from 'react';

function DestinationForm({ onAdd }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, country, description, visited: false });
    setName('');
    setCountry('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for name, country, and description */}
      <button type="submit">Add Destination</button>
    </form>
  );
}

export default DestinationForm;
