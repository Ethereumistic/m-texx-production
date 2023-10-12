import React from 'react';
import Image from 'next/image';
import { useTheme } from "next-themes";

const CircleSelectorr = ({ currentIndex, handleCircleClick }) => {
    const { theme } = useTheme();

  const originalCircles = [
    {
      id: 1,
      src: '/img/circle/recycling.svg',
      srcDark:'/img/circle/recycling-d.svg',
      title: 'Recycling',
      description: 'This is a description for the recycling photo.',
    },
    {
      id: 2,
      src: '/img/circle/production.svg',
      srcDark:'/img/circle/production-d.svg',
      title: 'Production',
      description: 'This is a description for the production photo.',
    },
    {
      id: 3,
      src: '/img/circle/selling.svg',
      srcDark:'/img/circle/selling-d.svg',
      title: 'Selling',
      description: 'This is a description for the selling photo.',
    },
    {
      id: 4,
      src: '/img/circle/wear.svg',
      srcDark:'/img/circle/wear-d.svg',
      title: 'Wear',
      description: 'This is a description for the wear photo.',
    },
    {
      id: 5,
      src: '/img/circle/container.svg',
      srcDark:'/img/circle/container-d.svg',
      title: 'Container',
      description: 'This is a description for the container photo.',
    },
    {
      id: 6,
      src: '/img/circle/sorting.svg',
      srcDark:'/img/circle/sorting-d.svg',
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
          const src = theme === "dark" ? circle.srcDark : circle.src;

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
<Image
                src={src}
                alt={circle.title}
                className="w-full h-full object-contain border-green-300 hover:border-green-500 border-8 rounded-full"
                layout="fill"
              />
              <div className='rotate-45 mt-[100px]'>
            <div className="absolute w-[2px] h-56 bg-red-500" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className="absolute w-56 h-[2px] bg-red-500" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleSelectorr;