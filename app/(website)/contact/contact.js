"use client";

import dynamic from "next/dynamic";
import Container from "@/components/container";
import { React, useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import SideMenu from "@/components/SideMenu";
import MarkerGrid from "@/components/MarkerGrid";
import { LocationProvider } from '@/components/LocationContext';
import Backlink from "@/components/Backlink";



const DynamicMap = dynamic(() => import('@/components/DesktopMap'), {
  ssr: false,
})



const markers = require('@/components/markers');



export default function Contact() {




  return (
    <LocationProvider>

    <Container className="">
      <div >
          <div className="w-full " >

            <DynamicMap className="" />
          </div>

          <div className="sm:-translate-y-[830px] sm:-translate-x-96 translate-y-[100px] md:translate-y-[50px] md:translate-x-80 lg:translate-x-80 lg:translate-y-[50px] xl:-translate-x-96 xl:-translate-y-[830px]">
          <SideMenu />
          </div>

          <MarkerGrid markers={markers} />
        
      </div>
    </Container>
    <Backlink page="locations" />
    </LocationProvider>

  );
}

