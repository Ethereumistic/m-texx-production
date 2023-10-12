"use client";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Image from 'next/image';
import { FaHome, FaBriefcase, FaUser, FaCog, FaLightbulb, FaTrophy } from 'react-icons/fa';

import Carousel from "@/components/Carousel";
import Carousell from "@/components/Carousell";
import CircleSelector from "@/components/CircleSelector";
export default function Post({ posts }) {
  

  return (
    <>
      {/* {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )} */}
      {/* <div className="text-center text-4xl">САМО ЛОКАЦИИТЕ РАБОТЯТ</div> */}
      <div className="relative ">
        {/* Mobile Background Video */}
        <video className="-mt-6 brightness-75 md:hidden" src="/img/background2.mp4" autoPlay loop muted playsInline></video>
        {/* Desktop Background Video */}
        <video className="hidden md:block xl:rounded-lg -mt-6 brightness-75" src="/img/bgvideo.webm" autoPlay loop muted ></video>


          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <h1 class="mx-16 text-xl xl:text-5xl text-white font-bold text-right">Рециклиране на текстил: Втори живот за стари дрехи, 
              <br />
              първа стъпка към...</h1>
              <Link href="/recycling">
              <button class="text-md xl:text-2xl mr-4 mt-4 bg-transparent border border-white hover:bg-green-500 hover:border-green-500 text-white py-1 px-2 xl:py-4 xl:px-8 rounded-full float-right">Рециклиране на Текстил</button>
              </Link>
            </div>
            </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
        <div className="flex flex-col items-center p-8 bg-green-300 dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl xl:text-4xl font-bold mb-4 text-center">Запази околната среда, чрез преизползване, рециклиране и ...</h2>
          <p className="text-lg xl:text-2xl text-center">
          През 2022г. България е генерирала повече от 100 000 тона текстилни и кожени отпадъци, 
          но само 2% от този отпадък се рециклира. Ние целим да предоставим безплатно рециклиране 
          като услуга на домакинства и организации в България и да насърчим за преизползването, 
          рециклирането и намаляване на използването, чрез образование, с акцент върху 
          ангажирането на младежите в училищата.
          </p>
        </div>
      </div>

      <Image
        className="mx-auto rounded-lg border-4 border-green-300 dark:border-gray-300 mb-8"
        src="/img/esvg.svg" // Relative path to your image in the public folder
        alt="Description of the image"
        width={1000} // Specify the width
        height={1000} // Specify the height
      />

      <div className='w-full h-auto bg-green-300 my-2'>
        <h1 className='text-2xl xl:text-4xl font-bold text-center py-3'>Жизнения цикъл на дрехите и влиянието му върху околната среда</h1>
    </div>

      <Carousel />

      <div className='w-full h-auto bg-green-300  -mt-28 xl:-mt-[480px] '>
        <h1 className='text-2xl xl:text-4xl font-bold text-center py-3'>Жизнения цикъл на дрехите и влиянието му върху околната среда</h1>
    </div>


    </>
  );
}
