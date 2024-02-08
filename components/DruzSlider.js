"use client";
// components/PartnerCar.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logos = [
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/druzet/druzet-sell1.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/druzet/druzet-sell2.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/druzet/druzet-sell3.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/druzet/druzet-sell4.png',
];



const DruzSlider = () => {
    const [settings] = useState({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 0,
      cssEase: 'linear',
    });

    return (
<>

      <div className='p-8 w-full md:w-8/12 mx-auto mt-8 bg-lgreen  rounded-3xl border-4 border-dgreen'>

      <Slider {...settings} className="">
        {logos.map((logo2, index) => (
          <div key={index} className="container ">
            {/* <img src={logo} alt='logo' /> */}
            <Image 
              src={logo2}
              alt="obshtini"
              width={1200}
              height={100}
              className='mx-auto rounded-xl '
            />
          </div>
        ))}
      </Slider>
    </div>

    


    </>
    );
  };
  export default DruzSlider;