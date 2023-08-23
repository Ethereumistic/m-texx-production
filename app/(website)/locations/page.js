"use client";
import dynamic from "next/dynamic";
import Container from "@/components/container";
import { React, useState, useRef, useEffect } from "react";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import SideMenu from "@/components/SideMenu";
import MarkerGrid from "@/components/MarkerGrid";

import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";

import Backlink from "@/components/Backlink";

const DynamicMap = dynamic(() => import('@/components/DesktopMap'), {
  ssr: false,
})

const markers = require('@/components/markers');
const customIcon = new Icon({
  iconUrl: "https://cdn.discordapp.com/attachments/1017047163324346420/1138806234468843570/location.png",
  iconSize: [34, 34]
})




export default function Locations() {



  return (
    <div>v kontakti</div>

  );
}