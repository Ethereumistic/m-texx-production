"use client";
import React, { createContext, useState, useContext } from 'react';

export const LocationContext = createContext(null);

export const LocationProvider = ({ children, map }) => (
  <LocationContext.Provider value={map}>{children}</LocationContext.Provider>
);