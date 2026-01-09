import { useWeather } from "@/hooks/useWeather.ts";

interface PlaceProps {
  title: string;
  city: string;
}
export const CityWeather = ({title, city}: PlaceProps) => {
  const { data, loading, error } = useWeather(city);

  if (loading) return <div className="data">Loading...</div>;
  if (error) return <div className="data">Error: {error}</div>;
  if (!data) return null;

  return  (
    <div className="data">
      <div className="title">{title}</div>
      <div className="weather-icon" title={data.iconTitle}>{data.icon}</div>
      <div className="weather">{data.temp} <small>&deg;C</small></div>
      <div className="text">{data.message}</div>
      <div className="time">{data.time}</div>
      <div className="daytime">{data.daytime}</div>
    </div>)
}
