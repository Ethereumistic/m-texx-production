import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CircleSelector from './CircleSelector';
const images = [
  {
    src: '/img/carousel/recycling.png',
    title: 'Recycling',
    description: 'След съответното третиране сортираните дрехи могат да бъдат повторно използвани като дрехи втора употреба, парцали за почистване,рециклирани влакна, изолационни материали и пълнежи или като алтернативно гориво в специални инсталации на енергоемки производства.',
  },
  {
    src: '/img/carousel/production.png',
    title: 'Production',
    description: 'За производството на килограм памук, еквивалентен на теглото на една мъжка риза и чифт дънки, са нужни между 10 000 и 20 000 литра вода. Една четвърт от световното потребление на пестициди се пада на производителите на памук, а енергията, вложена в целия жизнен цикъл на дрехите, употребени в ЕС, е генерирала 195 млн. тона СО2 за година.',
  },
  {
    src: '/img/carousel/selling.jpg',
    title: 'Selling',
    description: '„Бързата мода“ е водещ бизнес модел. Хората купуват все повече дрехи, като в ЕС количествата достигат до 6,4 млн. тона годишно. Огромното мнозинство купува нови дрехи; едва 6 % от хората въобще се замислят за дрехи втора употреба.',
  },
  {
    src: '/img/carousel/wear.jpg',
    title: 'Wear',
    description: 'Средният потребител днес купува 60% повече дрехи и ги използва 50% по-малко време в сравнение с преди 15 години. Дрехите в Европейския съюз обикновено издържат между 3 и 4 години, а удвояването на този период от една на две години намалява годишните емисии на CO2 с 24%.',
  },
  {
    src: '/img/carousel/container.jpg',
    title: 'Container',
    description: 'Завършването на текстилния цикъл изисква алтернативен начин за избавяне от старите дрехи. На тази нужда могат да отговорят специалните контейнери за оставяне на дрехи и обувки.',
  },
  {
    src: 'img/carousel/sorting.jpg',
    title: 'Sorting',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
];

const Carousel = () => {
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
    const interval = setInterval(goToNext, 18000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="scale-50 xl:scale-100 translate-y-0 xl:translate-y-32 -translate-x-4 xl:-translate-x-80 mb-8 xl:mb-0">
    <CircleSelector className="" currentIndex={currentIndex} handleCircleClick={handleCircleClick} />
  </div>
  
<div className="flex items-center justify-center h-screen ">

      <div className="w-[500px] h-[500px] absolute scale-75 xl:scale-100 translate-x-0 xl:translate-x-80 -translate-y-0 xl:-translate-y-96 mb-24">
        <div className=" h-full w-full overflow-hidden rounded-t-xl relative">
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
            className="text-3xl text-green-300 hover:text-green-500 p-2 focus:outline-none"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-0 right-0 flex items-center h-full">
          <button
            onClick={goToNext}
            className="text-3xl text-green-300 hover:text-green-500 p-2 focus:outline-none"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="relative bottom-0 left-0 right-0 p-4 bg-green-300 dark:bg-gray-800 text-white translate-y-2 rounded-b-xl">
          <div className="mb-2 text-xl font-bold">
            {images[currentIndex].title}
          </div>
          <div className="text-xl">
            {images[currentIndex].description}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Carousel;





