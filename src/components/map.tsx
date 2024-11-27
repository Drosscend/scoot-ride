"use client";

import { useLocation } from "@/hooks/useLocation";
import * as turf from "@turf/turf";
import { GeoJson, GeoJsonFeature, Map, Marker, ZoomControl } from "pigeon-maps";
import { useEffect, useState } from "react";

type Location = {
  name: string;
  coordinates: [number, number];
};

export function MapComponent() {
  const [center, setCenter] = useState<[number, number]>([44.445697739748944, 1.441751999891954]); // Centered on Cahors by default
  const [zoom, setZoom] = useState<number>(12);
  const { coordinates: userLocation, error, loading } = useLocation();
  const RADIUS_KM = 10;

  // Define fixed locations for markers
  const locations: Location[] = [
    { name: "Cahors", coordinates: [44.445697739748944, 1.441751999891954] },
    { name: "Pradines", coordinates: [44.47450297107502, 1.4078354542278497] },
    { name: "Cahors 1", coordinates: [44.44960765715062, 1.433347457420965] },
    { name: "Cahors 2", coordinates: [44.46323952807242, 1.4557767891683213] },
    { name: "Mercuès", coordinates: [44.49706065469613, 1.385863921699686] },
    { name: "Espère", coordinates: [44.509890294160726, 1.3730486455717652] },
  ];

  // Create a circle feature for user's range
  const createCircleFeature = (center: [number, number]) => {
    const point = turf.point([center[1], center[0]]); // Convert to [longitude, latitude] for turf
    const circle = turf.circle(point, RADIUS_KM, {
      steps: 64,
      units: "kilometers",
    });

    return {
      type: "Feature",
      geometry: circle.geometry,
      properties: { prop0: "value0" },
    };
  };

  const geoJsonFeature = userLocation ? createCircleFeature(userLocation) : null;

  const handleBoundsChange = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
    setCenter(center);
    setZoom(zoom);
  };

  // Automatically adjust view when user location is available
  useEffect(() => {
    if (userLocation) {
      setCenter(userLocation);
      setZoom(12);
    }
  }, [userLocation]);

  // Only show location names when zoomed in enough
  const shouldShowLabels = zoom >= 11;

  return (
    <section id="map" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Notre Couverture par rapport à votre position</h2>
        <div className="h-[600px] overflow-hidden rounded-lg shadow-lg">
          <Map height={600} center={center} zoom={zoom} onBoundsChanged={handleBoundsChange} minZoom={8} maxZoom={18}>
            <ZoomControl />
            {/* User range circle */}
            {userLocation && geoJsonFeature && (
              <GeoJson
                svgAttributes={{
                  fill: "#d4e6ec99",
                  strokeWidth: "2",
                  stroke: "#10B981",
                  fillOpacity: "0.2",
                }}
              >
                <GeoJsonFeature feature={geoJsonFeature} />
              </GeoJson>
            )}
            {/* Fixed location markers */}
            {locations.map((location) => (
              <Marker key={location.name} width={shouldShowLabels ? 50 : 30} anchor={location.coordinates} color="#10B981" />
            ))}
            {/* User location marker */}
            {userLocation && <Marker width={40} anchor={userLocation} color="#2563EB" />}
          </Map>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          {loading
            ? "Chargement de votre position..."
            : error
              ? "Erreur : " + error
              : userLocation
                ? `Votre position est affichée sur la carte avec un rayon d'action de ${RADIUS_KM} km.`
                : "Activez la géolocalisation pour voir votre position sur la carte."}
        </p>
      </div>
    </section>
  );
}
