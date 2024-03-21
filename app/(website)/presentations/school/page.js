import React from 'react';
import PresentationS from '@/components/PresentationS';
import SchoolVideo from '@/components/SchoolVideo';

const School = () => {

  return (

<div class="z-50 -translate-y-[144px] overflow-y-hidden">
      
      <PresentationS />
      <div className='mt-8'>
      <SchoolVideo />
      </div>
    </div>
  );
};

export default School;