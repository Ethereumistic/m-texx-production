"use client";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Image from 'next/image';
import { FaHome, FaBriefcase, FaUser, FaCog, FaLightbulb, FaTrophy } from 'react-icons/fa';
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import { paginatedquery } from "@/lib/sanity/groq";
import { fetcher } from "@/lib/sanity/client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Collect from "@/components/Collect";
import CircleSelector from "@/components/CircleSelector";
import ImgCarousel from "@/components/ImgCarousel";
import HowToCards from "@/components/HowToCards";
import OurLocations from "@/components/OurLocations";

export default function Post({ posts: initialposts }) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageIndex = parseInt(page) || 1;

  const POSTS_PER_PAGE = 9;

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  // [(($pageIndex - 1) * 10)...$pageIndex * 10]{
  const paramsForQuery = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE
  };

  // const fetcher = (query, params) =>
  //   client && client.fetch(query, params);

  const {
    data: posts,
    error,
    isValidating
  } = useSWR([paginatedquery, paramsForQuery], fetcher, {
    fallbackData: initialposts,
    onSuccess: () => {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    setIsFirstPage(pageIndex < 2);
  }, [pageIndex]);

  useEffect(() => {
    setIsLastPage(posts.length < POSTS_PER_PAGE);
  }, [posts]);

  const handleNextPage = () => {
    router.push(`/archive?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/archive?page=${pageIndex - 1}`);
  };
  

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
        <video className="hidden md:block xl:rounded-lg -mt-6 brightness-75 mx-auto" src="/img/bgvideo.webm" autoPlay loop muted ></video>
        {/* 4K Video centered for biggest device */}
        {/* <video className="hidden max-xl:block xl:rounded-lg -mt-6 brightness-75 " src="/img/bgvideo.webm" autoPlay loop muted ></video> */}

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <h1 class="mx-16 text-xl xl:text-5xl text-white font-russo text-right">Рециклиране на текстил: Втори живот за стари дрехи, 
              <br />
              първа стъпка към...</h1>
              <Link href="/recycling">
              <button class="text-md xl:text-2xl font-russo mr-4 mt-4 bg-transparent border border-white hover:bg-lgreen hover:border-dgreen text-white hover:text-dgreen py-1 px-2 xl:py-4 xl:px-8 rounded-full float-right">Рециклиране на Текстил</button>
              </Link>
            </div>
            </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
        <div className="flex flex-col items-center p-2 xl:p-8 bg-lgreen dark:bg-lgreen text-dgreen rounded-lg shadow-md">
          <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center">Запази околната среда, чрез преизползване, рециклиране и ...</h2>
          <p className="text-lg xl:text-2xl text-center font-osw">
          През 2022г. България е генерирала повече от 100 000 тона текстилни и кожени отпадъци, 
          но само 2% от този отпадък се рециклира. Ние целим да предоставим безплатно рециклиране 
          като услуга на домакинства и организации в България и да насърчим за преизползването, 
          рециклирането и намаляване на използването, чрез образование, с акцент върху 
          ангажирането на младежите в училищата.
          </p>
        </div>
      </div>

      <Image
        className="mx-auto rounded-lg border-4 border-lgreen dark:lgreen mb-8"
        src="/img/esvg.svg" // Relative path to your image in the public folder
        alt="Description of the image"
        width={1000} // Specify the width
        height={1000} // Specify the height
      />

      <div className='w-full h-auto bg-lgreen dark:bg-lgreen my-8'>
        <h1 className='text-2xl xl:text-6xl text-dgreen dark:text-dgreen font-russo text-center py-3 mx-12'>Жизнения цикъл на дрехите и влиянието му върху околната среда</h1>
    </div>

      <ImgCarousel className='' />

      <div className=' w-full mx-auto h-auto bg-lred dark:bg-lred my-4'>
        <h1 className='text-2xl xl:text-4xl text-dred dark:text-dred font-russo text-center py-4 px-2'>Изхвърляне на дрехи в контейнери за общи отпадъци води до замърсяване на околната среда</h1>
    </div>
      <HowToCards />
      <Collect />
      <OurLocations />

      <Container>
        <h1 className="text-center text-3xl font-russo tracking-tight text-dgreen dark:text-white lg:text-4xl lg:leading-snug">
          Новини
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg font-osw text-dgreen dark:text-lgreen">
            Виж всички статии, които сме написали.
          </p>
        </div>
        {posts && posts?.length === 0 && (
          <div className="flex h-40 items-center justify-center">
            <span className="text-lg text-gray-500">
              End of the result!
            </span>
          </div>
        )}

        {isValidating && (
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {new Array(6).fill().map((item, index) => (
              <div key={index}>
                <SkeletonImg />
              </div>
            ))}
          </div>
        )}
        {posts && !isLoading && !isValidating && (
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
        )}
        <div className="mt-10 flex items-center justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination">
            <button
              disabled={isFirstPage}
              onClick={handlePrevPage}
              className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-dgreen dark:text-gray-300">
              <ChevronLeftIcon
                className="h-3 w-3"
                aria-hidden="true"
              />
              <span className="font-osw">Назад</span>
            </button>
            <button
              onClick={handleNextPage}
              disabled={isLastPage}
              className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-dgreen dark:text-gray-300">
              <span className="font-osw">Напред</span>
              <ChevronRightIcon
                className="h-3 w-3"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </Container>

      
    </>
  );
}

const SkeletonImg = () => {
  const style = `
   .dark svg#skeleton #colorbase {
      stop-color: #2d2d2d;
    }
    .dark svg#skeleton #colorhighlight {
      stop-color: #3d3d3d;
    }
`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      id="skeleton"
      aria-labelledby="loading-aria"
      viewBox="0 0 500 800"
      preserveAspectRatio="none">
      <title id="loading-aria">Loading...</title>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="2" ry="2" width="505" height="505" />
          <rect x="0" y="623" rx="0" ry="0" width="480" height="18" />
          <rect x="0" y="568" rx="0" ry="0" width="154" height="21" />
          <rect
            x="-10"
            y="433"
            rx="2"
            ry="2"
            width="365"
            height="1"
          />
          <rect
            x="60"
            y="756"
            rx="0"
            ry="0"
            width="164"
            height="27"
          />
          <rect
            x="277"
            y="763"
            rx="0"
            ry="0"
            width="179"
            height="14"
          />
          <circle cx="20" cy="769" r="18" />
          <circle cx="250" cy="770" r="4" />
          <rect x="0" y="664" rx="0" ry="0" width="365" height="18" />
          <rect x="0" y="705" rx="0" ry="0" width="193" height="18" />
        </clipPath>
        <linearGradient id="fill">
          <stop
            offset="0.599964"
            stopColor="#f0f0f0"
            stopOpacity="1"
            id="colorbase">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="1.59996"
            stopColor="#f7f7f7"
            stopOpacity="1"
            id="colorhighlight">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="2.59996"
            stopColor="#f0f0f0"
            stopOpacity="1"
            id="colorbase">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};