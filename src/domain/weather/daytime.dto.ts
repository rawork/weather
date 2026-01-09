export interface DaytimeDTO {
  results: {
    sunrise: string; // "5:51:13 AM",
    sunset: string; // "12:42:30 PM",
    solar_noon: string; // "9:16:51 AM",
    day_length: string; // "06:51:17",
    civil_twilight_begin: string; // "5:03:20 AM",
    civil_twilight_end: string; // "1:30:23 PM",
    nautical_twilight_begin: string; // "4:11:13 AM",
    nautical_twilight_end: string; // "2:22:29 PM",
    astronomical_twilight_begin: string; // "3:22:58 AM",
    astronomical_twilight_end: string; // "3:10:45 PM"
  },
  status: string;
  tzid: string;
}