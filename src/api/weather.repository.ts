import type { WeatherRepository } from "@/domain/weather/weather.repository.ts";
import { getCityWeather } from "@/api/weather.api.ts";
import { loadDaytime } from "@/api/daytime.api.ts";
export class WeatherApiRepository
  implements WeatherRepository {

  async getCityWeather(city: string) {
    return getCityWeather(city);
  }

  async getDaytime(lat: number, lon: number) {
    return loadDaytime(lat, lon);
  }
}