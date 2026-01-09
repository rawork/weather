import type { WeatherRepository } from './weather.repository';
import { mapToWeatherWithDaytime } from './weather.mapper';

export class WeatherService {

  repo: WeatherRepository
  constructor(
    repo: WeatherRepository
  ) {
    this.repo = repo;
  }

  async getWeatherWithDaytime(city: string) {
    const weather = await this.repo.getCityWeather(city);

    const { lat, lon } = weather.coord;

    const daytime = await this.repo.getDaytime(lat, lon);

    return mapToWeatherWithDaytime(
      weather,
      daytime
    );
  }

}