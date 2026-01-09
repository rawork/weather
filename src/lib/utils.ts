import type {CityWeatherDTO} from "@/domain/weather/weather.dto.ts";
export const NEXT_SPRING_MONTH = 2;
export const NEXT_SPRING_DAY = 20;

export const seasons: string[] = [
  'winter',
  'winter',
  'winter',
  'spring',
  'spring',
  'summer',
  'summer',
  'summer',
  'autumn',
  'autumn',
  'winter',
  'winter'
];

export const messages: Record<string, string> = {
  "spring": "Весна!",
  "summer": "Лето!",
  "autumn": "До весны",
  "winter": "До весны"
};

type IconCode = string; // "01d" | "01n" можно сузить позже

type IconMap = Record<IconCode, string>;

type WeatherIcon = string | IconMap;

export const types: Record<string, WeatherIcon> = {
  200: "P",
  201: "P",
  202: "0",
  210: "P",
  211: "P",
  212: "0",
  221: "0",
  230: "P",
  231: "P",
  232: "0",
  300: "Q",
  301: "Q",
  302: "Q",
  310: "Q",
  311: "Q",
  312: "Q",
  313: "Q",
  314: "Q",
  321: "Q",
  500: "R",
  501: "R",
  502: "R",
  503: "R",
  504: "R",
  511: "X",
  520: "R",
  521: "R",
  522: "R",
  531: "R",
  600: "U",
  601: "U",
  602: "W",
  611: "X",
  612: "X",
  615: "X",
  616: "X",
  620: "X",
  621: "X",
  622: "X",
  701: "M",
  711: "M",
  721: "L",
  731: "F",
  741: "M",
  751: "F",
  761: "E",
  762: "E",
  771: "F",
  781: "F",
  800: {"01d": "B", "01n": "C"},
  801: {"02d": "H", "02n": "I"},
  802: "N",
  803: "Y",
  804: "Y"
};

export const iDiv = (x: number, y: number): number => (x-x%y)/y;

export const declOfNum = (number: number, titles: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
};

export const leapYear = (year: number): boolean => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

type DiffResult = {
  months: number;
  days: number;
};

export function diffMonthsAndDays(
  startDate: Date,
  endDate: Date
): DiffResult {
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  let months = 0;
  let cursor = new Date(startDate.getTime());

  while (true) {
    const next = new Date(cursor.getTime());
    next.setMonth(next.getMonth() + 1);

    if (next <= endDate) {
      cursor = next;
      months++;
    } else {
      break;
    }
  }

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const days = Math.floor(
    (endDate.getTime() - cursor.getTime()) / MS_PER_DAY
  );

  return { months, days };
}

export const getIcon = (data: CityWeatherDTO): string => {
  const weather = data.weather?.[0];
  if (!weather) return '';

  const iconCode = weather.icon;
  const weatherIcon = types[weather.id];

  if (!weatherIcon) return '';

  if (typeof weatherIcon === 'string') {
    return weatherIcon;
  }

  return weatherIcon[iconCode] ?? '';
}