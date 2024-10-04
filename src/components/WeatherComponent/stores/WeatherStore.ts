import { fetchWeatherByLatLon } from '../services/WeatherService'
import { Weather } from '../type/Weather'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('metaPhoto', () => {
  const weather = ref<Weather>()

  const fetchWeather = (lat: number, lon: number) => {
    fetchWeatherByLatLon(lat, lon).then((data: Weather) => {
      weather.value = data
    })
  }
  return { weather, fetchWeather }
})
