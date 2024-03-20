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

const School = () => {

  const image = '/img/economy/economy.png';
  const leftText = 'This is the text that will be displayed when the left side of the image is clicked.';
  const rightText = 'This is the text that will be displayed when the right side of the image is clicked.';

  return (
    <div>
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-4xl font-russo text-dgreen mb-4">Очаквайте скоро</h2>

        </div>
      </div>

    </div>
  );
};

export default School;