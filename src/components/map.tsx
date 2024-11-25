"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

export function Map() {
  const position: [number, number] = [43.604652, 1.444209] // Coordonnées de Toulouse
  const customIcon = new Icon({
    iconUrl: '/placeholder.svg?height=25&width=25',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

  return (
    <section id="map" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Notre Couverture</h2>
        <div className="h-[400px] overflow-hidden rounded-lg shadow-lg">
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>{`
                Siège social de Scoot'Ride <br /> Toulouse, France
              `}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

