import type { CityWeatherDTO } from '@/domain/weather/weather.dto';

// TODO import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_KEY = '05ad4f7f418e8272dabde7d42e4b5073';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
//const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=05ad4f7f418e8272dabde7d42e4b5073'

export async function getCityWeather(
  city: string
): Promise<CityWeatherDTO> {
  const url = new URL(baseUrl);
  url.searchParams.set('q', city);
  url.searchParams.set('units', 'metric');
  url.searchParams.set('appid', API_KEY);

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Weather request failed: ${res.status}`);
  }

  return await res.json();
}
