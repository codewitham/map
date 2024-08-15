'use client';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

// Define a Marker type
type MarkerType = {
  position: [number, number];
  label: string;
};

// Array of markers
const markers: MarkerType[] = [
  { position: [28.6139, 77.209], label: 'New Delhi' },
  { position: [19.076, 72.8777], label: 'Mumbai' },
  { position: [13.0827, 80.2707], label: 'Chennai' },
  { position: [22.5726, 88.3639], label: 'Kolkata' },
  { position: [12.9716, 77.5946], label: 'Bangalore' },
];

function CenterMap({ position }: { position: LatLngExpression }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);

  return null;
}

const MapComponent = () => {
  const [activePosition, setActivePosition] = useState<LatLngExpression>(markers[0].position);

  return (
    <MapContainer center={activePosition} zoom={5} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          eventHandlers={{
            click: () => {
              setActivePosition(marker.position);
            },
          }}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}

      <CenterMap position={activePosition} />
    </MapContainer>
  );
};

export default MapComponent;
