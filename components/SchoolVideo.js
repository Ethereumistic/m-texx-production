"use client";
import React from 'react';
import ReactPlayer from 'react-player'; // Install: npm install react-player

const SchoolVideo = () => {
  //video path
  let videosrc = "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/videos/products-compressed.mp4";

  return (
    <div className=''>

      <div className='hidden lg:block'>
      <div className='justify-center flex '>
      <ReactPlayer
        width="1440px"
        height="810px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
      </div>
      </div>

      <div className='block lg:hidden'>
      <div className='justify-center flex '>
      <ReactPlayer
        width="480px"
        height="270px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
      </div>
      </div>



    </div>
  );
};


export default SchoolVideo;