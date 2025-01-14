"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TripPlanner() {
  const [start, setStart] = useState("Pradines");
  const [end, setEnd] = useState("Espère");
  const [result, setResult] = useState<string | null>(null);

  const checkTrip = () => {
    const distance = 11.1;
    if (distance <= 30) {
      setResult(`Trajet possible ! Distance estimée : ${distance.toFixed(2)} km.`);
    } else {
      setResult(`Désolé, ce trajet dépasse notre limite de 30 km. Distance : ${distance.toFixed(2)} km.`);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Planifiez votre trajet</h2>
        <div className="mx-auto max-w-md space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="text-primary" />
            <Input placeholder="Adresse de départ" value={start} onChange={(e) => setStart(e.target.value)} />
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="text-primary" />
            <Input placeholder="Adresse d'arrivée" value={end} onChange={(e) => setEnd(e.target.value)} />
          </div>
          <Button onClick={checkTrip} className="w-full">
            Vérifier le trajet
          </Button>
          {result && <p className="mt-4 rounded-lg bg-gray-100 p-4">{result}</p>}
        </div>
      </div>
    </section>
  );
}
