// Technology.js
"use client";
import { useState } from 'react';

import Image from 'next/image';
import { SlChemistry } from "react-icons/sl";
import { FaGears } from "react-icons/fa6";
import { FaBacteria } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";


const Technology = () => {

    const [accordion1Open, setAccordion1Open] = useState(false);
    const [accordion2Open, setAccordion2Open] = useState(false);
    const [accordion3Open, setAccordion3Open] = useState(false);
  
    const toggleAccordion1 = () => setAccordion1Open(!accordion1Open);
    const toggleAccordion2 = () => setAccordion2Open(!accordion2Open);
    const toggleAccordion3 = () => setAccordion3Open(!accordion3Open);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-8">
      <Image
        src="/img/technology/tech.png" // Update with your image path
        alt="Economy Image"
        width={1300}
        height={500} // Adjust the height as needed
        className="rounded-lg mb-8"
      />

      <div className=" flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-8 h-auto sm:h-82">
        <div className="bg-dgreen dark:bg-lgreen rounded-lg p-4 w-[320px] sm:w-[410px] h-full">
        <FaGears className='mx-auto text-lgreen dark:text-dgreen' size={48}/>
          <p className="text-white text-lg sm:text-xl dark:text-dgreen font-osw text-center">Механичното рециклиране на текстил включва процеси като събиране, сортиране и физическо преработване на използваните текстилни материали. Текстилните отпадъци се раздробяват и претоварват, след което се обработват механично, за да се получат влакна, които могат да бъдат използвани за производство на нови текстилни продукти. Този метод спестява енергия, но понякога може да доведе до загуба на качество на материала.</p>
          <MdOutlineArrowDropDown className='mx-auto text-lgreen dark:text-dgreen' size={48} onClick={toggleAccordion1}/>
          {accordion1Open && (
            <div className="my-4 bg-white dark:bg-dgreen p-4 rounded-lg transition-all duration-300">
              {/* Content for Accordion 1 */}
              <p className="text-dgreen dark:text-white ">Във високотехнологичните фабрики за механично рециклиране на текстил се използват роботи с изкуствен интелект, които са програмирани да разпознават и сортират текстилните отпадъци с по-голяма точност от човек.</p>
            </div>
          )}
        </div>

        <div className="bg-dgreen dark:bg-lgreen rounded-lg p-4 w-[320px] sm:w-[410px] h-full">
        <SlChemistry className='mx-auto text-lgreen dark:text-dgreen ' size={48}/>
          <p className="text-white text-lg sm:text-xl dark:text-dgreen font-osw text-center">Химичното рециклиране използва химикали, за да разгради текстилните материали на молекуларно ниво. Процесът включва химически реакции, които отделят полимерните вериги и позволяват възстановяването на влакната. Този метод е по-ефективен при запазването на качеството на текстила в сравнение с механичното рециклиране, но може да изисква по-големи инвестиции в енергия и ресурси.</p>
          <MdOutlineArrowDropDown className='mx-auto text-lgreen dark:text-dgreen' size={48} onClick={toggleAccordion2}/>
          {accordion2Open && (
            <div className="my-4 bg-white dark:bg-dgreen p-4 rounded-lg transition-all duration-300">
              {/* Content for Accordion 1 */}
              <p className="text-dgreen dark:text-white">При химичното рециклиране на текстил могат да се използват биохимикали, които създават специфични "разтвори", наподобяващи естествените процеси на разграждане, за да възстановят влакната с минимални потребности за вода и енергия.</p>
            </div>
          )}
        </div>

        <div className="bg-dgreen dark:bg-lgreen rounded-lg p-4 w-[320px] sm:w-[410px] h-full">
        <FaBacteria className='mx-auto text-lgreen dark:text-dgreen' size={48}/>
          <p className="text-white text-lg sm:text-xl dark:text-dgreen font-osw text-center">Биологичното рециклиране използва микроорганизми или ензими, които разграждат текстилните материали в екосистемата. Този подход се основава на природните процеси на разлагане и може да бъде по-устойчив от гледна точка на използваната енергията. Този метод може да бъде успешен за почистването на океаните и депата. Биологичното рециклиране е в ранен етап на развитие и продължава да се проучва.</p>
          <MdOutlineArrowDropDown className='mx-auto text-lgreen dark:text-dgreen' size={48} onClick={toggleAccordion3}/>
          {accordion3Open && (
            <div className="my-4 bg-white dark:bg-dgreen p-4 rounded-lg transition-all duration-300">
              {/* Content for Accordion 1 */}
              <p className="text-dgreen dark:text-white">Някои от микроорганизмите, използвани в биологичното рециклиране на текстил, са открити в екстремни условия, като вулканични извори или дълбоки морски ровове, демонстрирайки удивителната адаптивност на живота в природата.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default Technology;