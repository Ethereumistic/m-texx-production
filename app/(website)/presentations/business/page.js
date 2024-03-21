import React from 'react';
import PresentationB from "@/components/PresentationB"
import BusinessVideo from '@/components/BusinessVideo';


const Business = () => {


  return (
    <>
<div class="z-50 -translate-y-[144px] overflow-x-hidden">

        <PresentationB />

        <div className='mt-8'>
          <BusinessVideo />
          
        </div>


    </div>
    </>
  );
};

export default Business;