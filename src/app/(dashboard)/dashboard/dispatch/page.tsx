'use client'
import React, { useEffect, useRef } from 'react'

export default function Page() {
  const mapRef = useRef(null)

  useEffect(() => {
    const initMap = () => {
      if (window.google && mapRef.current) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
          zoom: 12,
        })
      }
    }

    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD3oE6zpQw1EFzWBrCuhPdAeqedjp46tNA`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }
  }, [])

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}
