"use client";

import dynamic from "next/dynamic";
import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import SideMenu from "@/components/SideMenu";
import MarkerGrid from "@/components/MarkerGrid";

const DynamicMap = dynamic(() => import('@/components/DesktopMap'), {
  ssr: false,
})

const markers = require('@/components/markers');


export default function Contact() {


  return (
    <Container className="">
      <div >
        <div className="">
          <div className="" >
            <DynamicMap />

          </div>
          <SideMenu />
          <MarkerGrid markers={markers} />
        </div>
      </div>
    </Container>
  );
}
