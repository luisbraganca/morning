import axios from "axios";
import { useEffect, useState } from "react";

const request = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-type": "application/json",
  },
});

export default function useOpenWeather(
  type,
  { apiKey, latitude, longitude, count, units }
) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await request.get(`/${type}`, {
          params: {
            appid: apiKey,
            lat: latitude,
            lon: longitude,
            units: units ?? "standard",
            ...(count ? { cnt: count } : {}),
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [type, apiKey, latitude, longitude, units, count]);

  return {
    data,
    isLoading,
    error,
  };
}
