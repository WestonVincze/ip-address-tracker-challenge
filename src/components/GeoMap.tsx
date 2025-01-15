'use client';
import { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export const GeoMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.25, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
}
