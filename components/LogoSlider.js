"use client";
// components/PartnerCar.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logos = [
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/burgas.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/gabrovo.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/dryanovo.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/byala.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/debelec.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/dimitrovgrad.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/nova-zagora.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/pleven.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/plovdiv.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/razgrad.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/ruse.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/shumen.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/sliven.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/smolyan.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/sozopol.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/targovishte.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/v-tarnovo.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/yambol.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/hisarya.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/dve-mogili.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/banite.png'
  // Add all your image URLs here
];

const logoz = [
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/1.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/2.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/3.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/4.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/5.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/6.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/7.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/8.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/9.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/10.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/11.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/12.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/13.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/14.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/15.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/16.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/17.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/18.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/bolyarovo.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/kilifarevo.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/2/kalofer.png',
  // Add all your image URLs here
];

const LogoSlider = () => {
    const [settings] = useState({
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 0,
      cssEase: 'linear',
    });
    // Your component logic
    return (
<>
<h2 className="text-2xl xl:text-4xl font-russo text-dgreen dark:text-white mb-8 text-center ">Нашите партньори</h2>

      <div className='hidden md:block p-8 mx-96 mt-8 bg-lgreen rounded-tl-3xl rounded-tr-3xl border-t-4 border-x-4 border-dgreen'>
      <h2 className="text-2xl xl:text-4xl font-osw text-dgreen mb-8 text-center ">Общини</h2>

      <Slider {...settings} className="">
        {logos.map((logo2, index) => (
          <div key={index} className="container ">
            {/* <img src={logo} alt='logo' /> */}
            <Image 
              src={logo2}
              alt="obshtini"
              width={100}
              height={100}
              className=''
            />
          </div>
        ))}
      </Slider>
    </div>

    <div className='hidden md:block mx-96 p-8  bg-white border-x-4 border-b-4 rounded-br-3xl rounded-bl-3xl border-dgreen'>
      <Slider {...settings} className="">
        {logoz.map((logo, index) => (
          <div key={index} className="container ">
            {/* <img src={logo} alt='logo' /> */}
            <Image 
              src={logo}
              alt="obshtini"
              width={100}
              height={100}
              className=''
            />
          </div>
        ))}
      </Slider>
    </div>



    <div className="block md:hidden mx-4 flex-col items-center justify-center text-center bg-lgreen py-4 rounded-tl-3xl rounded-tr-3xl border-t-4 border-x-4 border-dgreen">
      <h2 className="text-2xl xl:text-4xl font-osw text-dgreen my-4  ">Общини</h2>
      <div className="flex flex-wrap justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 hover:scale-125 transition-transform duration-300 transform"
          >
            <Image
              src={logo}
              alt={`asd`}
              width={200}
              height={200}
              className=''
            />
          </div>
        ))}
      </div>
    </div>

    <div className="block md:hidden mx-4 flex-col items-center justify-center text-center py-4 bg-white border-x-4 border-b-4 rounded-br-3xl rounded-bl-3xl border-dgreen">
      <div className="flex flex-wrap justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 hover:scale-125 transition-transform duration-300 transform"
          >
            <Image
              src={logo}
              alt={`asd`}
              width={200}
              height={200}
              className=''
            />
          </div>
        ))}
      </div>
    </div>

    </>
    );
  };
  export default LogoSlider;