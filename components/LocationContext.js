"use client";
import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const selectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <LocationContext.Provider value={{ selectedLocation, selectLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
