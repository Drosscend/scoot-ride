import { useEffect, useState } from "react";

type Location = {
  coordinates: [number, number] | null;
  error: string | null;
  loading: boolean;
};

export const useLocation = () => {
  const [location, setLocation] = useState<Location>({
    coordinates: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation({
        coordinates: null,
        error: "La géolocalisation n'est pas disponible dans ce navigateur.",
        loading: false,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          coordinates: [position.coords.latitude, position.coords.longitude],
          error: null,
          loading: false,
        });
      },
      (error) => {
        setLocation({
          coordinates: null,
          error: error.message,
          loading: false,
        });
      }
    );
  }, []);

  return location;
};
