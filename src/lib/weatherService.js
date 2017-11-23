const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=05ad4f7f418e8272dabde7d42e4b5073'

export const loadWeather = (place) => {
  return fetch(baseUrl.replace('{city}', place))
    .then(res => res.json())
}
