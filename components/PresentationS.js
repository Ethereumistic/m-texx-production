"use client";
// components/PartnerCar.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaExpandAlt  } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logos = [
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/1.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/2.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/3.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/4.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/5.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/6.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/7.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/8.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/9.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/10.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/11.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/12.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/13.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/14.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/15.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/16.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/17.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/18.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/19.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/20.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/business/21.png',

];



const PresentationS = () => {
    const [fullscreen, setFullscreen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

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

      useEffect(() => {
        const handleFullscreenChange = () => {
          setIsFullscreen(!!document.fullscreenElement);
        };
    
        document.addEventListener("fullscreenchange", handleFullscreenChange);
    
        return () => {
          document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
      }, []);
    

    return (
        <>

            <Slider {...settings} className="overflow-x-hidden ">
        {logos.map((logo2, index) => (
          <div key={index} className=" ">
            <Image 
              src={logo2}
              alt="obshtini"
              width={1920}
              height={1080}
              className='mx-auto  '
            />
          </div>
        ))}
      </Slider>  
            <div className={`w-full h-4 bg-dgreen -translate-y-2  ${isFullscreen ? 'block' : ''}`}></div>

        <div className="justify-center mt-8 bottom-0 left-0 flex items-center h-full">
        <button onClick={toggleFullscreen} className="text-3xl text-lgreen  hover:text-dgreen hover:dark:text-white p-2 focus:outline-none flex">
                <FaExpandAlt />
              </button>
            </div>
    </>
    );
  };
  export default PresentationS;