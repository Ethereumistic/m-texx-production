"use client";
import React, { useState } from 'react';
import markers from 'components/markerz'; // Import your existing markers array.
import localStorage from 'local-storage';

export default function MarkerForm() {
  const [city, setCity] = useState('');
  const [popUp, setPopUp] = useState('');
  const [geocode, setGeocode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new marker object with the input values.
    const newMarker = {
      city,
      popUp,
      geocode: geocode.split(',').map(Number),
    };

    // Add the newMarker to the markers array.
    markers.push(newMarker);

    localStorage.setItem('markers', JSON.stringify(markers));


    // Clear the form inputs.
    setCity('');
    setPopUp('');
    setGeocode('');
  };

  return (
    <div>
      <h1>Add a Marker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="popUp">Pop Up:</label>
          <input
            type="text"
            id="popUp"
            value={popUp}
            onChange={(e) => setPopUp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="geocode">Geocode (Lat,Lng):</label>
          <input
            type="text"
            id="geocode"
            value={geocode}
            onChange={(e) => setGeocode(e.target.value)}
          />
        </div>
        <button type="submit">Add Marker</button>
      </form>
    </div>
  );
}
