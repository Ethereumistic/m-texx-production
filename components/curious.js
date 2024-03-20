"use state";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { GiAbstract040 } from 'react-icons/gi';
import { IoShirt } from "react-icons/io5";
import { PiPantsFill } from 'react-icons/pi';

const Curious = () => {
  const CirclePollution = [
    { icon: <IoShirt className='text-lgreen' size={48} />, title: 'ТЕНИСКА', photoSrc: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/curious/1-shirt.png', desc: 'ЗНАЕТЕ ЛИ КОЛКО ЛИТРА ВОДА СА НЕОБХОДИМИ ЗА ПРОИЗВОДСТВОТО НА ЕДНА ТЕНИСКА?' },
    { icon: <PiPantsFill className='text-lgreen' size={48} />, title: 'ДЪНКИ', photoSrc: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/curious/1-jeans.png', desc: 'ЗНАЕТЕ ЛИ КОЛКО ЛИТРА ВОДА СА НЕОБХОДИМИ ЗА ПРОИЗВОДСТВОТО НА ЕДНИ ДЪНКИ?' },
    { icon: <GiAbstract040 className='text-lgreen ' size={48} />, title: 'ПЛАСТМАСА', photoSrc: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/curious/microplastic-ss.png', desc: 'ЗНАЕТЕ ЛИ ОТ КЪДЕ ИДВАТ ПЛАСТМАСОВИТЕ МИКРОЧАСТИЦИ В ПРИРОДАТА?' },
  ];

  const [activeCircle, setActiveCircle] = useState(0);

  const handleCircleClick = (index) => {
    setActiveCircle(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the photo under the circles on an interval
      setActiveCircle((prevIndex) => (prevIndex + 1) % CirclePollution.length);
    }, 13000); // Change photo every 13 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center bg-dgreen my-4 py-4">

      <h3 className="text-2xl xl:text-4xl font-russo text-white my-2">Интересни факти</h3>
      <h1 className="mx-8 text-xl xl:text-2xl font-osw text-lgreen my-2 -mb-4 md:-mb-16">
        {CirclePollution[activeCircle].desc}
      </h1>

      <div className="flex  items-center">
        <div className="hidden md:block flex-col">
          {CirclePollution.map((item, index) => (
            <div
              key={index}
              className="p-4 hover:scale-125 sm:scale-75 scale-90 transition-transform duration-300 transform relative cursor-pointer sm:flex-col "
              onClick={() => handleCircleClick(index)}
            >
              <div
                className={`w-20 h-20 rounded-full  ${
                  activeCircle === index ? 'border-opacity-100' : 'border-opacity-0'
                } transition-all duration-300`}
              ></div>
              {item.icon}
              <h3 className="text-xl font-russo text-white mt-4 -translate-x-10">{item.title}</h3>
            </div>
          ))}
          
        </div>




        <div className="hidden md:block mt-4 p-4 bg-lgreen rounded-lg">
          <Image
            src={CirclePollution[activeCircle].photoSrc}
            alt={`Active Image`}
            width={600}
            height={300}
            className="rounded-lg"
          />
        </div>

      </div>
      <div className=" md:hidden flex-row flex translate-x-6 scale-90">
          {CirclePollution.map((item, index) => (
            <div
              key={index}
              className="p-4 hover:scale-110 sm:scale-75 scale-90 transition-transform duration-300 transform relative cursor-pointer sm:flex-col"
              onClick={() => handleCircleClick(index)}
            >
              <div
                className={`w-20 h-20 rounded-full border-4 border-dgreen ${
                  activeCircle === index ? 'border-opacity-100' : 'border-opacity-0'
                } transition-all duration-300`}
              ></div>
              {item.icon}
              <h3 className="text-xl font-russo text-white mt-4 text-center -translate-x-10">{item.title}</h3>
            </div>
          ))}
          
        </div>
        
        <div className="block md:hidden mt-4 p-4 bg-lgreen rounded-lg w-10/12">
          <Image
            src={CirclePollution[activeCircle].photoSrc}
            alt={`Active Image`}
            width={600}
            height={300}
            className="rounded-lg mr-96 md:mr-0"
          />
        </div>
    </div>
    
  );
};

export default Curious;


