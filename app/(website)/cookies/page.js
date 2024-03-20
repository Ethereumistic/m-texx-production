"use client";
import React from 'react';
import Image from 'next/image';
import { FaLightbulb } from 'react-icons/fa';
import Pollution from '@/components/pollution';
import Curious from '@/components/curious';
import Economy from '@/components/Economy';
import Process from '@/components/Process';
import Technology from '@/components/Technology';
import Link from 'next/link';

const Cookies = () => {

  const image = '/img/economy/economy.png';
  const leftText = 'This is the text that will be displayed when the left side of the image is clicked.';
  const rightText = 'This is the text that will be displayed when the right side of the image is clicked.';

  return (
    <div>
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-4xl font-russo text-dgreen mb-4">Бисквитки</h2>
          <p className="text-lg text-center font-osw text-dgreen">
          “Бисквитките” се използват за много цели – да се запомнят предпочитанията
           и настройките Ви за изглед, шрифт, език на сайта, да Ви бъдат предлагани
            релевантни на Вашите интереси реклами, за водене на статистика на посещенията
             на дадена страница, сайтът да Ви “запомни”, че сте логнати и др.
            Уебсайтовете често събират информация за начина, по който потребителите
             взаимодействат с тях – това може да включва страниците, които хората посещават
              най-често, дали получават съобщения за грешка от някои от тях, как навигират в
               сайта и др. На база анализа на тази информация се предприемат действия за
                подобряване на услугите и работата на сайтовете с цел приятно и
                 безпроблемно ползване от потребителите.
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-russo text-dgreen dark:text-lgreen mb-4 text-center ">Видове Бисквитки:</h2>

      <div className="mx-auto px-4 md:px-8 lg:px-8 xl:px-[600px] my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <p className="text-lg text-center font-osw text-dgreen">
          <h2 className="text-2xl text-left font-russo text-dgreen mb-2">
            <ul className='list-none'>
                <li>
          „Постоянни“ бисквитки (Persistent Cookies):
                </li>
            </ul>
          </h2>
          Постоянните бисквитки остават запаметени на компютъра Ви за определен 
          период от време след приключване на потребителската Ви сесия на сайта и 
          позволяват предпочитанията и настройките Ви да бъдат “запомнени”, 
          когато посетите отново сайта.
          </p>
        </div>
      </div>


      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-[500px] my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <p className="text-lg text-center font-osw text-dgreen">
          <h2 className="text-2xl text-left font-russo text-dgreen mb-2">
            <ul className='list-none'>
                <li>
          „Сесийни“ бисквитки (Session Cookies):
                </li>
            </ul>
          </h2>
          Сесийните бисквитки позволяват да бъдете разпознати по време на 
          еднократно посещение на уебсайта, така че направените персонализации 
          или промени по всяка страница да бъдат запомнени в други страници от сайта. 
          Сесийните бисквитки са временни и тяхното действие приключва, 
          когато затворите браузъра или излезете от сайта.
          </p>
        </div>
      </div>


      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-[400px] my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <p className="text-lg text-center font-osw text-dgreen">
          <h2 className="text-2xl text-left font-russo text-dgreen mb-2">
            <ul className='list-none'>
                <li>
            „Бисквитки на трета страна“ (Third Party Cookies)
                </li>
            </ul>
          </h2>
          Това са бисквитки за запаметяване на информация за отчитане на ефективността 
          на сайта и рекламите по демографски признак, интереси, продължителност на сесиите 
          и т.н. Този сайт използва Google Analytics, услуга за уеб анализ без да се 
          идентифицират лично отделните посетители., предлагана от Google, Inc. Цялата 
          тази информация се използва от нас само за статистически цели и за разпознаване 
          на грешни линкове или програмни грешки. Разкриване на информация на трети лица 
          не се извършва. Бисквитките не се използват за цели, различни от посочените тук.

          </p>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-[300px] my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-4xl font-russo text-dgreen mb-4">Как да контролирате бисквитките?</h2>
          <p className="text-lg text-center font-osw text-dgreen">
          Можете да контролирате и/или изтривате бисквитки когато пожелаете.  ­ 
          Можете да изтриете всички  или избрани бисквитки, които вече са запазени 
          на Вашия компютър, а също така можете да настроите повечето браузъри да ги блокират. 
          Ако направите това обаче, може да се наложи ръчно да настройвате някои параметри всеки път, 
          когато посещавате даден сайт, а освен това е възможно някои услуги и функции да не работят.
          Повече информация за бисквитките и за какво се употребяват, препоръчваме следните линкове:
        
            <ul className='list-none mt-2'>
            <Link href="https://allaboutcookies.org/" target='_blank'>
                <li className='py-2 hover:scale-125 transition duration-300'>
                www.allaboutcookies.org
                </li>
            </Link> 
            <Link href="https://youronlinechoices.com/bg" target='_blank'>
                <li className='py-2 hover:scale-125 transition duration-300'>
                www.youronlinechoices.com/bg
                </li>
            </Link> 
            </ul>
          </p>
          <small className='sm:px-32 px-4 sm:pt-2 pt-2 font-russo text-dgreen'>Продължайки взаимодействието си с този сайт, Вие се съгласявате с използването от нас на бисквитки</small>
        </div>
      </div>
      

    </div>
  );
};

export default Cookies;