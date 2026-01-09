export interface CityWeatherDTO {
  id: number;
  name: string;
  dt: number;
  coord: {
    lat: number;
    lon: number
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: { speed: number };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}