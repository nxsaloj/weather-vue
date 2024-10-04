import { fetchCitiesByCityName } from '../services/CityService'
import { City } from '../type/City'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCityStore = defineStore('cityStore', () => {
  const cities = ref<City[]>([])

  const fetchCities = (cityName: string) => {
    fetchCitiesByCityName(cityName).then((data: City[]) => {
      cities.value = data
    })
  }
  return { cities, fetchCities }
})
