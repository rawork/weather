import { useEffect, useState } from 'react';
import { WeatherService } from '@/domain/weather/weather.service';
import { WeatherApiRepository } from '@/api/weather.repository';
import type { WeatherCard } from "@/domain/weather/weather.models.ts";

const service = new WeatherService(
  new WeatherApiRepository()
);

export function useWeather(city: string) {
  const [data, setData] = useState<WeatherCard | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    service
      .getWeatherWithDaytime(city)
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
}