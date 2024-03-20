import React from 'react';
import Image from 'next/image';
import { useTheme } from "next-themes";

const CircleSelector = ({ currentIndex, handleCircleClick }) => {

    const { theme } = useTheme();

    const newCircle = {
        id: 7,
        src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/trash.svg',
        srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/trash-d.svg',
        title: 'Изхвърляне на боклука',
        description: 'Изхвърляне на боклука',
      }

    const originalCircles = [
        {
          id: 1,
          src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/recycling.svg',
          srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/recycling-d.svg',
          title: 'Рециклиране',
          description: 'This is a description for the recycling photo.',
        },
        {
          id: 2,
          src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/production.svg',
          srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/production-d.svg',
          title: 'Продукция',
          description: 'This is a description for the production photo.',
        },
        {
          id: 3,
          src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/selling.svg',
          srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/selling-d.svg',
          title: 'Продажби',
          description: 'This is a description for the selling photo.',
        },
        {
          id: 4,
          src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/wear.svg',
          srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/wear-d.svg',
          title: 'Употреба',
          description: 'This is a description for the wear photo.',
        },
        {
          id: 5,
          src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/container2.svg',
          srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/container-dd.svg',
          title: 'Оставяне в контейнер',
          description: 'This is a description for the container photo.',
        },
        {
          id: 6,
          src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/sorting.svg',
          srcDark:'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/circle-selector/sorting-d.svg',
          title: 'Сортиране',
          description: 'This is a description for the sorting photo.',
        },
        
      ];

      

  const displayOrder = [4, 5, 6, 1, 2, 3]; // Adjust the display order as needed

  const totalCircles = originalCircles.length;
  const radius = 250; // Adjust the radius as needed

  return (
<div class="flex items-center flex-wrap justify-center -translate-x-36 -translate-y-44 ">
      <div className="relative ">
        {displayOrder.map((circleId, index) => {
          const circle = originalCircles.find((c) => c.id === circleId);
          const src = theme === "dark" ? circle.srcDark : circle.src;

          // Calculate the position of each circle
          const circleAngle = (2 * Math.PI * index) / totalCircles;
          const circleTop = radius * Math.sin(circleAngle);
          const circleLeft = radius * Math.cos(circleAngle);

          // Calculate the rotation for the arrows
          const arrowRotation = (circleAngle + Math.PI) * (180 / Math.PI);
          
          return (
            <div
              key={index}
              className="absolute w-52 h-52 rounded-full cursor-pointer "
              style={{
                // Calculate the position of each circle in the circular formation
                top: `${radius * Math.sin((2 * Math.PI * index) / totalCircles)}px`,
                left: `${radius * Math.cos((2 * Math.PI * index) / totalCircles)}px`,
              }}
              onClick={() => {
                console.log("Clicked on circle with id:", circle.id);
                handleCircleClick(originalCircles.findIndex((c) => c.id === circleId))
              }}
            >
              <Image
                src={src}
                alt={circle.title}
                className="w-full h-full object-contain border-lgreen hover:border-green-500 dark:lgreen dark:hover:border-green-500 border-8 rounded-full"
                width={30}
                height={30}
              />
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 ${circle.id === 5 ? 'translate-y-8' : 'translate-y-14'} dark:text-white text-black font-russo text-center`}>
                  {circle.title}
                </div>
            </div>
          );
        })}

<div className="absolute w-52 h-52 rounded-full cursor-pointer translate-x-28" style={{ top: '350px', left: '220px' }}>
        <Image
          src={theme === "dark" ? newCircle.srcDark : newCircle.src} // Use theme-specific src
          alt="Your New Circle"
          className="w-full h-full object-contain border-lred hover:border-red-500 dark:border-red-800 dark:hover:border-red-500 border-8 rounded-full"
          width={30}
          height={30}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-10 dark:text-white text-black font-russo text-center">
            {newCircle.title}
        </div>
        <div className='rotate-45 -translate-y-24'>
            <div className="absolute w-[2px] h-56 bg-red-500" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className="absolute w-56 h-[2px] bg-red-500" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default CircleSelector;