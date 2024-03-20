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

const Presentations = () => {


  return (
<div>
  <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
    <div className="flex mx-auto justify-center text-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
      <h2 className="text-4xl font-russo text-dgreen hover:scale-150 transition duration-300">
      <Link href="presentations/school" className='px-16 '>Училищна</Link>
      </h2>

      <h2 className="text-4xl font-russo text-dgreen  hover:scale-150 transition duration-300">
      <Link href="presentations/business" className='px-16 '>Бизнес</Link>
      </h2>
    </div>
  </div>
</div>
  );
};

export default Presentations;