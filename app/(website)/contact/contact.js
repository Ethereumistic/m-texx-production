"use client";

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
import DesktopMap from "@/components/DesktopMap";

export default function Contact() {


  return (
    <Container className="">
      <div >
        <div className="">
          <div className="" >
            <DesktopMap />
          </div>
          <SideMenu />
          
        </div>
      </div>
    </Container>
  );
}
