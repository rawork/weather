// https://api.sunrise-sunset.org/json?lat=58.388006&lng=42.447329
const baseUrl = 'https://api.sunrise-sunset.org/json';

export const loadDaytime = async (lat: number, lng: number) => {
  const url = new URL(baseUrl);
  url.searchParams.set('lat', String(lat));
  url.searchParams.set('lng', String(lng));

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Sunrise-sunset request failed: ${res.status}`);
  }

  return await res.json();
}