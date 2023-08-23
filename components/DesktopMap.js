"use client";
import dynamic from 'next/dynamic'

import React, { useState, useEffect } from 'react';
import Container from "@/components/container";
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

const markers = require('@/components/markers');

const customIcon = new Icon({
    iconUrl: "https://cdn.discordapp.com/attachments/1017047163324346420/1138806234468843570/location.png",
    iconSize: [34, 34]
  })

  const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/DesktopMap'),
    { ssr: false }
  )

export default function DesktopMap(props) {


    return (
        <div className='w-full'>
        <div className="">
        <DynamicComponentWithNoSSR />

        <MapContainer
      center={[42.7339, 25.4858]}
      zoom={8}
      style={{ width: '100%', height: '800px', zIndex: '10' }} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
<MarkerClusterGroup
          chunkedLoading>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
  <div>
    <p>{marker.city}</p>
    <p>{marker.popUp}</p>
    <p>
{marker.geocode[0].toFixed(6)} {marker.geocode[1].toFixed(6)}
    </p>
  </div>
</Popup>


          </Marker>
        ))}
        </MarkerClusterGroup>



        </MapContainer>
        asd
        </div>
        </div>
        );
    }