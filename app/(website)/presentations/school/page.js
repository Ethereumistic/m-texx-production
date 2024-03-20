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
import PresentationS from '@/components/PresentationS';

const School = () => {

  const image = '/img/economy/economy.png';
  const leftText = 'This is the text that will be displayed when the left side of the image is clicked.';
  const rightText = 'This is the text that will be displayed when the right side of the image is clicked.';

  return (
<div class="z-50 -translate-y-[144px] overflow-y-hidden">
      
      <PresentationS />

    </div>
  );
};

export default School;