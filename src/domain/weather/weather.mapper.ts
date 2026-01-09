import type { CityWeatherDTO } from './weather.dto';
import type { DaytimeDTO } from "./daytime.dto.ts";
import type { WeatherCard } from './weather.models';
import {
  NEXT_SPRING_MONTH,
  NEXT_SPRING_DAY,
  messages,
  seasons,
  declOfNum,
  diffMonthsAndDays,
  getIcon
} from "@/lib/utils.ts";

export function mapToWeatherWithDaytime(
  weather: CityWeatherDTO,
  daytime: DaytimeDTO
): WeatherCard {

  const nowDate = new Date();
  const month = nowDate.getMonth();
  const year = nowDate.getFullYear();
  const day = nowDate.getDate();

  const isSpringCome = NEXT_SPRING_MONTH*30 + NEXT_SPRING_DAY < month*30 + day;
  const nextYear = year+(!isSpringCome ? 0 : 1);

  const springDate = new Date(nextYear, NEXT_SPRING_MONTH, NEXT_SPRING_DAY, 0, 0, 1);
  const className = (NEXT_SPRING_MONTH === month && NEXT_SPRING_DAY >= day ? 'spring' : seasons[month]);

  const result = diffMonthsAndDays(nowDate, springDate);

  return {
    icon: getIcon(weather),
    iconTitle: weather.weather[0].main,
    temp: Math.round(weather.main.temp),
    message: messages[className],
    time: result.months + ' мес. ' + result.days + ' ' + declOfNum((result.days), ['день', 'дня', 'дней']),
    daytime: daytime.results.day_length,
  };
}
