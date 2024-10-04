import { WeatherData } from '../type/Weather'

const weatherApiToken = process.env.VUE_APP_WEATHER_API_TOKEN

export const fetchWeatherByLatLon = (lat:number, lon: number):Promise<WeatherData> => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${weatherApiToken}`,
    options
  )
    .then((result) => result.json())
    .catch((error) => console.log('Error: ', error))
}
