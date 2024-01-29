"use client";
import React, { useState, useEffect, useRef, useContext } from 'react';
import Container from "@/components/container";
import { useRouter } from 'next/navigation';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
const markers = require('@/components/markers');



export default function SideMenu(props) {

    const uniqueCityNames = [...new Set(markers.map((marker) => marker.city))];

const [selectedCity, setSelectedCity] = useState(null);
const [selectedLocation, setSelectedLocation] = useState(null);
const mapRef = useRef(null); // Create a ref for your map component

const handleCityClick = (cityName) => {
    if (selectedCity === cityName) {
        setSelectedCity(null); // Close the menu if the same city is clicked again
      } else {
        setSelectedCity(cityName);
      }
    };

    const handleLocationClick = (location) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });



      // if (!map) {
      //   return;
      // }
  
      // setSelectedLocation(location);
      // const marker = markers.find((marker) => marker.popUp === location);
      // if (marker) {
      //   const [lat, lng] = marker.geocode;
  
      //   map.setView([lat, lng], 14);
      // }

      const marker = markers.find((marker) => marker.popUp === location);
      if (marker && mapRef.current) {
        const [lat, lng] = marker.geocode;
        mapRef.current.zoomToLocation(lat, lng); // Call a function in your Map component to zoom
      }
    };

// const router = useRouter();
//     const handleLocationClick = (location) => {
//         // Use router to navigate to the top of the page
//         router.push('#top');
//         setSelectedLocation(location);
//       };

  return (

    <Container className="">
        <div className=''>

<div className="bg-lgreen  dark:bg-dgreen px-2 rounded-md w-72 h-[800px] overflow-auto custom-scrollbar " >

  <h2 className="text-2xl pl-20 font-bold mt-4 mb-6">Локации</h2>
  <ul className=''>
    {uniqueCityNames.map((cityName, index) => (
      <li key={index} className=" pl-16 py-2 border-white border  w-full">
        <div
          className="flex items-center font-bold cursor-pointer hover:text-green-400 text-dgreen dark:text-gray-300"
          onClick={() => handleCityClick(cityName)}
          onTouchStart={() => handleCityClick(cityName)}
           >

          {cityName}
          {selectedCity === cityName ?  (
            <FaAngleDown className="w-4 h-4 ml-2" />
          ) : (
            <FaAngleRight className="w-4 h-4 ml-2" />
          )}
        </div>
        {selectedCity === cityName && (
          <ol className="ml-4  cursor-pointer">
            {markers
              .filter((marker) => marker.city === cityName)
              .map((marker, index) => (
                  <li
                  key={index}
                  className="mb-1 list-decimal cursor-pointer"
                  onClick={() => handleLocationClick(marker.popUp)}
                  onTouchStart={() => handleLocationClick(marker.popUp)}
                  >
                  {marker.popUp}
                </li>
              ))}
          </ol>
        )}
      </li>
    ))}
  </ul>
</div>
</div>

    </Container>

  );
}
