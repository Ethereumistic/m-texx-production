"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CircleSelector from 'components/CircleSelector';
const images = [
  {
    src: '/img/carousel/recycling.png',
    title: 'Рециклиране',
    description: 'След съответното третиране сортираните дрехи могат да бъдат повторно използвани като дрехи втора употреба, парцали за почистване,рециклирани влакна, изолационни материали и пълнежи или като алтернативно гориво в специални инсталации на енергоемки производства.',
  },
  {
    src: '/img/carousel/production.png',
    title: 'Продукция',
    description: 'За производството на килограм памук, еквивалентен на теглото на една мъжка риза и чифт дънки, са нужни между 10 000 и 20 000 литра вода. Една четвърт от световното потребление на пестициди се пада на производителите на памук, а енергията, вложена в целия жизнен цикъл на дрехите, употребени в ЕС, е генерирала 195 млн. тона СО2 за година.',
  },
  {
    src: '/img/carousel/selling.jpg',
    title: 'Продажби',
    description: '„Бързата мода“ е водещ бизнес модел. Хората купуват все повече дрехи, като в ЕС количествата достигат до 6,4 млн. тона годишно. Огромното мнозинство купува нови дрехи; едва 6 % от хората въобще се замислят за дрехи втора употреба.',
  },
  {
    src: '/img/carousel/wear.jpg',
    title: 'Употреба',
    description: 'Средният потребител днес купува 60% повече дрехи и ги използва 50% по-малко време в сравнение с преди 15 години. Дрехите в Европейския съюз обикновено издържат между 3 и 4 години, а удвояването на този период от една на две години намалява годишните емисии на CO2 с 24%.',
  },
  {
    src: '/img/carousel/container.jpg',
    title: 'Оставяне в контейнер',
    description: 'Завършването на текстилния цикъл изисква алтернативен начин за избавяне от старите дрехи. На тази нужда могат да отговорят специалните контейнери за оставяне на дрехи и обувки.',
  },
  {
    src: 'img/carousel/sorting.jpg',
    title: 'Сортиране',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
  {
    src: 'img/carousel/trash.webp',
    title: 'Изхвърляне на боклука',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
];

const Rac = () => {
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
<div class="flex items-center flex-wrap justify-around my-5 -mb-28 sm:-mb-28 md:-mb-28 lg:-mb-28 xl:mb-28 ">
        <div class="flex items-center justify-center w-[800px] h-[800px] bg-transparent scale-[0.49] xl:scale-100 -translate-y-48 sm:-translate-y-48 md:-translate-y-48 lg:-translate-y-44 xl:translate-y-12">
            <CircleSelector className="" currentIndex={currentIndex} handleCircleClick={handleCircleClick} />
        </div>
  
        {/* <div class="flex items-center justify-center w-[800px] h-[800px] bg-transparent scale-[0.57] xl:scale-90 -translate-y-[520px] sm:-translate-y-[520px] md:-translate-y-[520px] lg:-translate-y-[510px] xl:-translate-y-0"> */}
        <div class="flex items-center justify-center 
                    w-[800px] h-[800px] bg-transparent 
                    scale-[0.57] xl:scale-90 
                    -mb-[520px] sm:-mb-[520px] md:-mb-[520px] lg:-mb-[510px] xl:-mb-0
                    -translate-y-[520px] sm:-translate-y-[520px] md:-translate-y-[520px] lg:-translate-y-[510px] xl:-translate-y-0">

          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Carousel Image ${index + 1}`}
              className={`absolute h-full w-full transition-opacity rounded-t-xl ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                objectFit: 'cover',
                objectPosition: 'center center', // Center the image both horizontally and vertically
              }}
            />
          ))}
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
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-green-300 dark:bg-dgreen text-white translate-y-24 rounded-b-xl">
          <div className="mb-2 text-xl font-bold text-gray-800 dark:text-white text-center">
            {images[currentIndex].title}
          </div>
          <div className="text-xl text-gray-800 dark:text-white text-center mx-2">
            {images[currentIndex].description}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Rac;