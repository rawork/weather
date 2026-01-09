import type { CityWeatherDTO } from './weather.dto';
import type { DaytimeDTO } from './daytime.dto';

export interface WeatherRepository {
  getCityWeather(city: string): Promise<CityWeatherDTO>;
  getDaytime(lat: number, lon: number): Promise<DaytimeDTO>;
}