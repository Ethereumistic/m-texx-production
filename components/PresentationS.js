"use client";
// components/PartnerCar.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaExpandAlt  } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaFileDownload } from "react-icons/fa";
import { GrNewWindow } from "react-icons/gr";
const slides = [
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/1.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/2.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/3.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/4.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/5.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/6n.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/7.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/8.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/9.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/10.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/11.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/12.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/13.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/14.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/15.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/16.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/17.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/18.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/19.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/20.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/21.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/22.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/23.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/24.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/25.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/26.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/27.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/28.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/29.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/30.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/31.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/32.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/33.png',
  'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school/34.png',

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
        {slides.map((logo2, index) => (
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

            <div className="justify-center mt-8 bottom-0 left-0 flex items-center h-full space-x-16">
        <button onClick={toggleFullscreen} className="hover:scale-125 transition duration-300 font-russo bg-dgreen dark:bg-lgreen rounded-xl text-3xl text-white dark:text-dgreen  hover:text-lgreen p-2 focus:outline-none flex">
                Цял Екран<FaExpandAlt className='ml-4'/>
              </button>
              <a href="/School-Presentation.pdf" download="school-presentation.pdf">
                    <button className="hover:scale-125 transition duration-300 font-russo bg-dgreen dark:bg-lgreen rounded-xl text-3xl text-white dark:text-dgreen  hover:text-lgreen p-2 focus:outline-none flex">
                        Изтегли <FaFileDownload className='ml-4'/>
                    </button>
                </a>
                <a target="_blank" rel="noopener" href="https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/presentations/school//School-Presentation_compressed.pdf" download="school-presentation.pdf">
                    <button className="hover:scale-110 transition duration-300 font-russo bg-dgreen dark:bg-lgreen rounded-xl text-3xl text-white dark:text-dgreen  hover:text-lgreen p-2 focus:outline-none flex">
                        Отвори презентацията в нов прозорец <GrNewWindow  className='ml-4'/>
                    </button>
                </a>
            </div>
    </>
    );
  };
  export default PresentationS;