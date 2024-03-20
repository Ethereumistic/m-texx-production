"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaExpandAlt  } from 'react-icons/fa';
import Image from 'next/image';

const images = [
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/1.png',
    title: 'Рециклиране',
    description: 'След съответното третиране сортираните дрехи могат да бъдат повторно използвани като дрехи втора употреба, парцали за почистване,рециклирани влакна, изолационни материали и пълнежи или като алтернативно гориво в специални инсталации на енергоемки производства.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/2.png',
    title: 'Продукция',
    description: 'За производството на килограм памук, еквивалентен на теглото на една мъжка риза и чифт дънки, са нужни между 10 000 и 20 000 литра вода. Една четвърт от световното потребление на пестициди се пада на производителите на памук, а енергията, вложена в целия жизнен цикъл на дрехите, употребени в ЕС, е генерирала 195 млн. тона СО2 за година.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/3.png',
    title: 'Продажби',
    description: '„Бързата мода“ е водещ бизнес модел. Хората купуват все повече дрехи, като в ЕС количествата достигат до 6,4 млн. тона годишно. Огромното мнозинство купува нови дрехи; едва 6 % от хората въобще се замислят за дрехи втора употреба.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/4.png',
    title: 'Употреба',
    description: 'Средният потребител днес купува 60% повече дрехи и ги използва 50% по-малко време в сравнение с преди 15 години. Дрехите в Европейския съюз обикновено издържат между 3 и 4 години, а удвояването на този период от една на две години намалява годишните емисии на CO2 с 24%.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/5.png',
    title: 'Оставяне в контейнер',
    description: 'Завършването на текстилния цикъл изисква алтернативен начин за избавяне от старите дрехи. На тази нужда могат да отговорят специалните контейнери за оставяне на дрехи и обувки.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/6.png',
    title: 'Сортиране',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/7.png',
    title: 'Изхвърляне на боклука',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/8.png',
    title: 'Рециклиране',
    description: 'След съответното третиране сортираните дрехи могат да бъдат повторно използвани като дрехи втора употреба, парцали за почистване,рециклирани влакна, изолационни материали и пълнежи или като алтернативно гориво в специални инсталации на енергоемки производства.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/9.png',
    title: 'Продукция',
    description: 'За производството на килограм памук, еквивалентен на теглото на една мъжка риза и чифт дънки, са нужни между 10 000 и 20 000 литра вода. Една четвърт от световното потребление на пестициди се пада на производителите на памук, а енергията, вложена в целия жизнен цикъл на дрехите, употребени в ЕС, е генерирала 195 млн. тона СО2 за година.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/10.png',
    title: 'Продажби',
    description: '„Бързата мода“ е водещ бизнес модел. Хората купуват все повече дрехи, като в ЕС количествата достигат до 6,4 млн. тона годишно. Огромното мнозинство купува нови дрехи; едва 6 % от хората въобще се замислят за дрехи втора употреба.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/11.png',
    title: 'Употреба',
    description: 'Средният потребител днес купува 60% повече дрехи и ги използва 50% по-малко време в сравнение с преди 15 години. Дрехите в Европейския съюз обикновено издържат между 3 и 4 години, а удвояването на този период от една на две години намалява годишните емисии на CO2 с 24%.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/12.png',
    title: 'Оставяне в контейнер',
    description: 'Завършването на текстилния цикъл изисква алтернативен начин за избавяне от старите дрехи. На тази нужда могат да отговорят специалните контейнери за оставяне на дрехи и обувки.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/13.png',
    title: 'Сортиране',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/14.png',
    title: 'Изхвърляне на боклука',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/15.png',
    title: 'Рециклиране',
    description: 'След съответното третиране сортираните дрехи могат да бъдат повторно използвани като дрехи втора употреба, парцали за почистване,рециклирани влакна, изолационни материали и пълнежи или като алтернативно гориво в специални инсталации на енергоемки производства.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/16.png',
    title: 'Продукция',
    description: 'За производството на килограм памук, еквивалентен на теглото на една мъжка риза и чифт дънки, са нужни между 10 000 и 20 000 литра вода. Една четвърт от световното потребление на пестициди се пада на производителите на памук, а енергията, вложена в целия жизнен цикъл на дрехите, употребени в ЕС, е генерирала 195 млн. тона СО2 за година.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/17.png',
    title: 'Продажби',
    description: '„Бързата мода“ е водещ бизнес модел. Хората купуват все повече дрехи, като в ЕС количествата достигат до 6,4 млн. тона годишно. Огромното мнозинство купува нови дрехи; едва 6 % от хората въобще се замислят за дрехи втора употреба.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/18.png',
    title: 'Употреба',
    description: 'Средният потребител днес купува 60% повече дрехи и ги използва 50% по-малко време в сравнение с преди 15 години. Дрехите в Европейския съюз обикновено издържат между 3 и 4 години, а удвояването на този период от една на две години намалява годишните емисии на CO2 с 24%.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/19.png',
    title: 'Оставяне в контейнер',
    description: 'Завършването на текстилния цикъл изисква алтернативен начин за избавяне от старите дрехи. На тази нужда могат да отговорят специалните контейнери за оставяне на дрехи и обувки.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/20.png',
    title: 'Сортиране',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/21.png',
    title: 'Изхвърляне на боклука',
    description: 'Събраните текстилни изделия се сортират в специални съоръжения в зависимост от предполагаемата им бъдеща употреба. Всяка отделна дреха се преценява според йерархията в политиката за предотвратяване и управление на отпадъците.',
  },

];

const PresentationB = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullscreen(false);
      }
    }
  };

  return (
    <>
      <div
        className={`flex items-center flex-wrap  ${
          fullscreen ? 'overflow-hidden' : ''
        }`}
      >        <div class="flex items-center justify-center 
                    w-full h-[1080px] bg-transparent 
                    
                    -mb-[520px] sm:-mb-[520px] md:-mb-[520px] lg:-mb-[510px] xl:-mb-0
                    -translate-y-[520px] sm:-translate-y-[520px] md:-translate-y-[520px] lg:-translate-y-[510px] xl:-translate-y-0">
            <div className="absolute top-0 right-0 flex items-center h-full z-50">

          </div>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={`Carousel Image ${index + 1}`}
              width={1920}
              height={1080}
              className={`absolute h-full w-full transition-opacity ${
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
            className="text-3xl text-lgreen hover:text-green-500 p-2 focus:outline-none"
          >
            <FaArrowLeft />
          </button>
        </div>

        
        <div className="absolute top-0 right-0 flex items-center h-full">
          <button
            onClick={goToNext}
            className="text-3xl text-lgreen hover:text-green-500 p-2 focus:outline-none"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="mx-auto mt-8 bottom-0 left-0 flex items-center h-full">
      <button onClick={toggleFullscreen} className="text-3xl text-lgreen hover:text-green-500 p-2 focus:outline-none">
              <FaExpandAlt />
            </button>
          </div>
    </div>
    </>
  );
};

export default PresentationB;