import React from 'react';
import Image from 'next/image';
import { FaLightbulb } from 'react-icons/fa';


const MarkerC = () => {
  return (
    <div>

      <div className="relative ">
        <video className=" xl:rounded-lg -mt-6 brightness-75" src="/img/background2.mp4" autoPlay loop muted playsInline></video>

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <h1 class="mx-16 text-md xl:text-5xl text-white font-bold text-right">Рециклиране на текстил: Втори живот за стари дрехи, 
              <br />
              първа стъпка към...</h1>
              <button class="text-md xl:text-2xl mt-4 bg-transparent border border-white hover:bg-green-500 hover:border-green-500 text-white py-1 px-2 xl:py-4 xl:px-8 rounded-full float-right">Рециклиране на Текстил</button>
            </div>
          </div>

      </div>
    </div>
  );
};

export default MarkerC;