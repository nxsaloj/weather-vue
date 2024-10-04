import { fetchWeatherByLatLon } from '../services/WeatherService'
import { WeatherData } from '../type/Weather'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weatherStore', () => {
  const weather = ref<WeatherData>()

  const fetchWeather = (lat: number, lon: number) => {
    fetchWeatherByLatLon(lat, lon).then((data: WeatherData) => {
      weather.value = data
    })
  }
  return { weather, fetchWeather }
})
