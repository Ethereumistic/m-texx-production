import React from 'react';

const CircleSelector = ({ currentIndex, handleCircleClick }) => {
  const originalCircles = [
    {
      id: 1,
      src: '/img/circle/recycling.svg',
      title: 'Recycling',
      description: 'This is a description for the recycling photo.',
    },
    {
      id: 2,
      src: '/img/circle/production.svg',
      title: 'Production',
      description: 'This is a description for the production photo.',
    },
    {
      id: 3,
      src: '/img/circle/selling.svg',
      title: 'Selling',
      description: 'This is a description for the selling photo.',
    },
    {
      id: 4,
      src: '/img/circle/wear.svg',
      title: 'Wear',
      description: 'This is a description for the wear photo.',
    },
    {
      id: 5,
      src: '/img/circle/container.svg',
      title: 'Container',
      description: 'This is a description for the container photo.',
    },
    {
      id: 6,
      src: 'img/circle/sorting.svg',
      title: 'Sorting',
      description: 'This is a description for the sorting photo.',
    },
  ];

  const displayOrder = [4, 5, 6, 1, 2, 3]; // Adjust the display order as needed

  const totalCircles = originalCircles.length;
  const radius = 250; // Adjust the radius as needed

  return (
    <div className="flex justify-center mt-32">
      <div className="relative w-32 h-32">
        {displayOrder.map((circleId, index) => {
          const circle = originalCircles.find((c) => c.id === circleId);
          return (
            <div
              key={index}
              className="absolute w-48 h-48 rounded-full cursor-pointer"
              style={{
                // Calculate the position of each circle in the circular formation
                top: `${radius * Math.sin((2 * Math.PI * index) / totalCircles)}px`,
                left: `${radius * Math.cos((2 * Math.PI * index) / totalCircles)}px`,
              }}
              onClick={() => handleCircleClick(originalCircles.findIndex((c) => c.id === circleId))}
            >
              <img
                src={circle.src}
                alt={circle.title}
                className="w-full h-full object-contain border-green-300 hover:border-green-500 border-8 rounded-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleSelector;
