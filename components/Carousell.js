import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CircleSelectorr from './CircleSelectorr';
import Image from 'next/image';

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
    src: '/img/carousel/sorting.jpg',
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
    <>
    <div className="scale-50 xl:scale-100 translate-y-0 xl:translate-y-32 -translate-x-4 xl:-translate-x-80 mb-8 xl:mb-0">
      <CircleSelectorr className="" currentIndex={currentIndex} handleCircleClick={handleCircleClick} />
    </div>

    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] h-[500px] absolute scale-75 xl:scale-100 translate-x-0 xl:translate-x-80 -translate-y-0 xl:-translate-y-96 mb-24">
        <div className="h-full w-full overflow-hidden rounded-t-xl relative">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={`Carousel Image ${index + 1}`}
              className={`absolute h-full w-full transition-opacity ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              layout="fill" // Use the layout property to specify how the image should behave
              objectFit="cover"
              objectPosition="center center"
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
          <div className="mb-2 text-xl font-bold">{images[currentIndex].title}</div>
          <div className="text-sm">{images[currentIndex].description}</div>
        </div>
      </div>
    </div>
  </>
);
};

export default Carousell;

