"use client";
import React from 'react';
import Image from 'next/image';
import { FaLightbulb } from 'react-icons/fa';
import Pollution from '@/components/pollution';
import Curious from '@/components/curious';
import Economy from '@/components/Economy';
import Process from '@/components/Process';
import Technology from '@/components/Technology';

const Recycling = () => {

  const image = '/img/economy/economy.png';
  const leftText = 'This is the text that will be displayed when the left side of the image is clicked.';
  const rightText = 'This is the text that will be displayed when the right side of the image is clicked.';

  return (
    <div>
      <Pollution />

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-4xl font-russo text-dgreen mb-4">Нашата мисия</h2>
          <p className="text-lg text-center font-osw text-dgreen">
            M-Texx се стреми да окаже положително въздействие; настоящата ни цел е да утроим процента на рециклирания
            текстил от 2% на 6% до 2030 г. Ние ще предоставим безплатни услуги за рециклиране на текстил на домакинства и
            организации в България и да насърчим за намаляване на използването, преизползването и рециклирането, чрез
            образование, с акцент върху ангажирането на младежите в училищата.
          </p>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 mb-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-3xl text-center font-russo text-dgreen mb-4">Жизненият цикъл на текстила</h2>
          <h2 className="text-xl text-center font-russo text-dgreen mb-2">
            Ние работим с нашите партньори, за да поддържаме текстила в затворен цикъл на рециклиране, за да помогнем на:
          </h2>
          <ul className="text-lg list-disc text-left sm:px-32 px-4">
            <li className="mb-2 font-osw text-dgreen">
              опазване на природните ресурси (напр. необходими са 6813 литра/1800 галона вода, за да се отгледа достатъчно
              памук, за да се направят само един чифт дънки)
            </li>
            <li className="mb-2 font-osw text-dgreen">
              намаляване на замърсяването на околната среда (тъй като намаляваме отпадъците, отиващи в инсталацията за
              изгаряне и депата)
            </li>
            <li className="mb-2 font-osw text-dgreen">улесняване на икономичното ценообразуване на дрехи и обувки (за използване в развиващите се страни)</li>
          </ul>
          <small className='sm:px-32 px-4 sm:pt-2 pt-4 font-russo text-dgreen'>Събраните материали за рециклиране на M-Texx се продават на вносители на текстил втора употреба в различни развиващи се страни. Това подкрепя нашия бизнес модел в предоставянето на безплатни услуги за събиране и образователни дейности.</small>
        </div>
      </div>
      
      <Curious />
      
      <div className='w-full h-auto bg-lgreen dark:bg-lgreen my-8'>
        <h1 className='text-2xl xl:text-6xl text-dgreen dark:text-dgreen font-russo text-center py-3 mx-12'>НАЧИНИ ЗА НАМАЛЯВАНЕ НА ЗАМЪРСЯВАНЕTO ОТ ТЕКСТИЛНИ ОТПАДЪЦИ</h1>
    </div>

    <Economy image={image} leftText={leftText} rightText={rightText}/>
    <Process />
    <Technology image={image} leftText={leftText} rightText={rightText}/>            
    </div>
  );
};

export default Recycling;