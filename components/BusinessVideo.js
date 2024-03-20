"use client";
import React from 'react';
import ReactPlayer from 'react-player'; // Install: npm install react-player

const BusinessVideo = () => {
  //video path
  let videosrc = "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/videos/production-compressed.mp4";

  return (
    <div>

      <ReactPlayer
        width="1920px"
        height="1080px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
      asd
    </div>
  );
};


export default BusinessVideo;