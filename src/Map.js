import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <div>
            <h3>Serge Nadin</h3>
            <p>Ville: Rabat</p>
            <p>Profession: Web Dev</p>
            <p>Tel: 0607576502</p>
            <img src="serge.jpg" alt="Votre photo" style={{ width: '100px' }} />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
