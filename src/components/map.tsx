"use client";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useState } from "react";

export function MapComponent() {
  const position: [number, number] = [44.670114, 1.580259];
  const [center, setCenter] = useState<[number, number]>(position);
  const [zoom, setZoom] = useState<number>(13);

  const handleBoundsChange = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
    setCenter(center);
    setZoom(zoom);
  };

  return (
    <section id="map" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{`Notre Couverture`}</h2>
        <div className="h-[600px] overflow-hidden rounded-lg shadow-lg">
          <Map height={600} center={center} zoom={zoom} onBoundsChanged={handleBoundsChange}>
            <ZoomControl />
            <Marker width={50} anchor={position} />
          </Map>
        </div>
      </div>
    </section>
  );
}
