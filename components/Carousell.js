import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CircleSelector from './CircleSelector';
const images = [
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

const Carousell = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 9000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
<div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
                <CircleSelector currentIndex={currentIndex} handleCircleClick={handleCircleClick} />
            </div>
            <div class="w-full sm:w-1/2 xl:w-full px-4 mb-4">
                <div class="bg-green-500 h-48 sm:h-32 md:h-48 lg:h-48 rounded-md text-white flex items-center justify-center">
                <div className="w-[500px] h-[500px] relative ml-32">
        <div className="relative h-full w-full overflow-hidden rounded-t-xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Carousel Image ${index + 1}`}
              className={`absolute h-full w-full transition-opacity ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                objectFit: 'cover',
                objectPosition: 'center center', // Center the image both horizontally and vertically
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 flex items-center h-full">
          <button
            onClick={goToPrevious}
            className="text-3xl text-gray-500 hover:text-gray-800 p-2 focus:outline-none"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-0 right-0 flex items-center h-full">
          <button
            onClick={goToNext}
            className="text-3xl text-gray-500 hover:text-gray-800 p-2 focus:outline-none"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-green-300 text-white translate-y-24 rounded-b-xl">
          <div className="mb-2 text-xl font-bold">
            {images[currentIndex].title}
          </div>
          <div className="text-sm">
            {images[currentIndex].description}
          </div>
        </div>
      </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Carousell;
