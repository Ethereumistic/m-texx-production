import React from 'react';
import { FaHome, FaBriefcase, FaUser, FaCog, FaLightbulb, FaTrophy } from 'react-icons/fa';

const TextilePath = () => {
  const icons = [
    <FaHome />,
    <FaBriefcase />,
    <FaUser />,
    <FaCog />,
    <FaLightbulb />,
    <FaTrophy />,
  ];

  const circle = () => {
    const radius = 200;
    const degrees = 360 / icons.length;

    return icons.map((icon, index) => (
      <div
        key={index}
        className="absolute rounded-full bg-blue-500 flex items-center justify-center rotate-45"
        style={{
          width: 100,
          height: 100,
          transform: `rotate(${degrees * index}deg) translate(${radius}px, ${radius}px)`,
          position: 'absolute',
        }}
      >
        {icon}
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-300">
      <div className="max-w-screen-md w-full">
        <div className="relative w-[400px] h-[400px]">
          {circle()}
        </div>
      </div>
    </div>
  );
};


export default TextilePath;