import React, { useState } from 'react';
import { FaHome, FaBriefcase, FaUser, FaCog, FaLightbulb, FaTrophy, FaCamera } from 'react-icons/fa';

const TextilePathh = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  const icons = [
    <FaHome />,
    <FaBriefcase />,
    <FaUser />,
    <FaCog />,
    <FaLightbulb />,
    <FaTrophy />,
    <FaCamera />,
  ];

  const circle = () => {
    const radius = 200;
    const degrees = 360 / icons.length;

    return icons.map((icon, index) => (
      <div
        key={index}
        className="absolute rounded-full bg-blue-500 flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          transform: `rotate(${degrees * index}deg) translate(${radius}px, ${radius}px)`,
          position: 'absolute',
        }}
        onClick={() => setActiveIconIndex(index)}
      >
        {icon}
      </div>
    ));
  };

  const carousel = () => {
    const carouselImages = [
      {
        src: '/img/carousel/recycling.png',
        title: 'Recycling',
        description: 'This is a description for the recycling photo.',
      },
      {
        src: '/img/carousel/production.png',
        title: 'Production',
        description: 'This is a description for the production photo.',
      },
      {
        src: '/img/carousel/selling.jpg',
        title: 'Selling',
        description: 'This is a description for the selling photo.',
      },
      {
        src: '/img/carousel/wear.jpg',
        title: 'Wear',
        description: 'This is a description for the wear photo.',
      },
      {
        src: '/img/carousel/container.jpg',
        title: 'Container',
        description: 'This is a description for the container photo.',
      },
      {
        src: 'img/carousel/sorting.jpg',
        title: 'Sorting',
        description: 'This is a description for the sorting photo.',
      },
    ];

    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-row justify-center">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Carousel image"
              className={`w-24 h-24 ${index === activeIconIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="max-w-screen-md w-full">
        <div className="relative w-400 h-400">
          {circle()}
        </div>
        {carousel()}
      </div>
    </div>
  );
};

export default TextilePathh;