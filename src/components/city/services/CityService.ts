import { City } from '../type/City'

const weatherApiToken = process.env.VUE_APP_WEATHER_API_TOKEN

export const fetchCitiesByCityName = (cityName: string):Promise<City[]> => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${weatherApiToken}`,
    options
  )
    .then((result) => result.json())
    .catch((error) => console.log('Error: ', error))
}
