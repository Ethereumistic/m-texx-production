"use client";
import React from 'react';
import Image from 'next/image';
import { FaLightbulb } from 'react-icons/fa';
import HowToCards from '@/components/HowToCards';
import LogoSlider from '@/components/LogoSlider';
import Druzet from '@/components/Druzet';
import DruzSlider from '@/components/DruzSlider';
import Link from 'next/link';

const Partners = () => {
    return (
            <>
        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
            <div className="flex flex-col items-center p-2 xl:p-8 bg-lgreen dark:bg-lgreen text-dgreen rounded-lg shadow-md">
                <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center">Дреб / Друзет</h2>
                    <p className="text-lg xl:text-2xl text-center font-osw">
                        Дреб (друзет) е текстилна вата, която се получава след разкъсване 
                        и разчепване на текстилни материи на тънки и фини влакна. Този продукт 
                        се използва широко в различни индустрии, включително в мебелната и 
                        автомобилната индустрия, строителството и други. Дреб се използва за 
                        пълнеж на мебели, за изолация на сгради и за други подобни приложения, 
                        където е необходимо да се използва устойчив и екологично приемлив материал. 
                    </p>
            </div>
        </div>

        {/* DESKTOP */}
            <div className="hidden md:block">
            <Druzet  />
            </div>

        {/* PHONE */}
        <Link href="/post/kakvi-produkti-mogat-da-se-szdadat-ot-recikliran-tekstil"
                className='cursor-pointer'>
            <div className="block md:hidden">
                <div className="flex flex-col items-center justify-center 
                      text-center bg-dgreen my-4 py-4 border-t-2 
                      border-b-2 border-dashed border-white dark:border-lgreen
                      
                      ">

                    <h3 className="text-2xl xl:text-4xl font-russo text-white my-10  "> Какво се прави от Друзет?</h3>
                    <Image
                    className=""
                    src="https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/druzet/druzet-graph.png" // Replace with your image path
                    alt="reusing textile"
                    width={500}
                    height={300}
                    />
                </div>
            </div>
        </Link>

            <DruzSlider />


        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
            <div className="flex flex-col items-center p-2 xl:p-8 bg-lgreen dark:bg-lgreen text-dgreen rounded-lg shadow-md">
                <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center">Допълнителна Информация</h2>
                    <p className="text-lg xl:text-2xl text-center font-osw">
                        Ние работим с нашите партньори, 
                        за да поддържаме текстила в 
                        затворен цикъл на рециклиране, 
                        продукт като дреб би бил полезен на:
                    </p>
                    <ul className='my-8 font-osw text-sm md:text-xl list-disc'>
                        <li className='mb-4'>производители на нетъкан текстил</li>
                        <li className='my-4'>производители на дюшеци, матраци, фитнес уреди</li>
                        <li className='my-4'>мебелна и автомобилна индустрия</li>
                        <li className='mt-4'>кино индустрия</li>
                    </ul>
            </div>
        </div>

        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
            <div className="flex flex-col items-center p-2 xl:p-8 bg-dgreen dark:bg-lgreen text-white rounded-lg shadow-md">
                <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center text-lgreen dark:text-dgreen">M-Texx Textile Recycling <span className='text-white dark:text-dgreen'>продава:</span></h2>
                    <p className="text-lg xl:text-2xl text-center font-osw dark:text-dgreen">
                    <span className='font-russo text-xl xl:text-3xl text-lgreen dark:text-dgreen'>Дреб / Друзет </span> - Състав 100%  рециклирани текстилни влакна с неопределен цвят.
                    </p>
                    <ul className='my-8 font-osw text-sm md:text-xl  md:list-disc'>
                        <li className='mb-4 dark:text-dgreen'><span className='font-russo text-sm xl:text-2xl text-lgreen dark:text-dgreen'>Опаковане:</span> Бали с тегло около 50-60 кг. и 100-120 кг.</li>
                        <li className='mt-4 dark:text-dgreen'><span className='font-russo text-sm xl:text-2xl text-lgreen dark:text-dgreen'>Цена:</span> 0.60 лв. / кг.</li>
                    </ul>
            </div>
            
            <Link href="/contact">
            <button className='flex mx-auto w-10/12 h-16 text-dgreen bg-lgreen my-8 rounded-full hover:bg-dgreen hover:dark:bg-lgreen hover:text-white hover:scale-110 transition duration-300'>
                <h3 className='text-3xl font-russo m-auto'>Свържи се с нас!</h3>    
            </button>    
            </Link>
        </div>
            </>
    );
}

export default Partners;