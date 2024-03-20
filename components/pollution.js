"use state";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Pollution = () => {
  const CirclePollution = [
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/1.png',
      title: 'ИЗПОЛЗВАНЕ НА ВОДА',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/2.png',
      title: 'ЗАМЪРСЯВАНЕ НА ВОДА',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/3.png',
      title: 'ЕМИСИИ НА ПАРНИКОВИ ГАЗОВЕ',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/4.png',
      title: 'ЗАМЪРСЯВАНЕ НА ДЕПА',
    },
  ];

  const HoverPollution = [
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/water-use-ss.png',
      title: 'СТЪКЛО',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/water-pollution-ss.png',
      title: 'ХАРТИЯ',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/air-pollution-ss.png',
      title: 'МЕТАЛ',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pollution/landfield-ss.png',
      title: 'БИТОВ ОТПАДЪК',
    },
  ];

  const [activeCircle, setActiveCircle] = useState(0);

  const handleCircleClick = (index) => {
    setActiveCircle(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the photo under the circles on an interval
      setActiveCircle((prevIndex) => (prevIndex + 1) % CirclePollution.length);
    }, 13000); // Change photo every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center bg-dgreen my-4 py-4">
        <h3 className="text-2xl xl:text-4xl font-russo text-white my-2  ">ТЕКСТИЛНАТА ИНДУСТРИЯ</h3>
        <h1 className="text-xl xl:text-2xl font-osw text-lgreen my-2  "> ВЛИЯНИЕТО ВЪРХУ ОКОЛНАТА СРЕДА </h1>
        <div className="flex flex-wrap justify-center">
          {CirclePollution.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 hover:scale-125 transition-transform duration-300 transform relative"
              onClick={() => handleCircleClick(index)}
            >
              <div
                className={`w-20 h-20 rounded-full  ${
                  activeCircle === index ? 'border-opacity-100' : 'border-opacity-0'
                } transition-all duration-300 absolute -top-2 -left-2`}
              ></div>
              <Image
                src={CirclePollution[index].src}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                className={`rounded-full ${
                  activeCircle === index ? 'border-lgreen border-8' : ''
                } transition-all duration-300`}
              />
              <h3 className="text-xl font-russo text-white mt-8">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-lgreen rounded-lg">
          <Image
            src={HoverPollution[activeCircle].src}
            alt={`Active Image`}
            width={1000}
            height={300}
            className='rounded-lg'
          />
        </div>
      </div>
    </>
  );
};

export default Pollution;





