'use client';

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

interface GeoMapProps {
  latitude: number
  longitude: number 
}

// Define a custom icon
const customIcon = icon({
  iconUrl: '/icon-location.svg', // Path to your custom icon
  iconSize: [46, 56], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

/**
 * Updates the map view whenever latitude or longitude change
 */
const UpdateMapView = ({ latitude, longitude }: GeoMapProps) => {
  const map = useMap();
  map.setView([latitude, longitude], 16);
  return null;
};

export const GeoMap = ({ latitude, longitude }: GeoMapProps) => {
  return (
    <MapContainer className="h-full w-full" zoomControl={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[latitude, longitude]}></Marker>
      <UpdateMapView latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
}