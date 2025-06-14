"use client"; // Required for Next.js

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Driver() {
  return (
    <div className="w-full h-screen bg-white">
      <LoadScript googleMapsApiKey="AIzaSyD3oE6zpQw1EFzWBrCuhPdAeqedjp46tNA">
        <GoogleMap 
          mapContainerStyle={{ width: "100%", height: "100%" }} 
          center={{ lat: 37.7749, lng: -122.4194 }} 
          zoom={12} 
        />
      </LoadScript>
    </div>
  );
}
