<template>
  <div>
    <h1>Nombre de la ciudad</h1>
    <CityAutocomplete v-model="defaultCity"></CityAutocomplete>
    <div v-if="defaultCity">
      <h1>Resumen del clima: </h1>
      <WeatherComponent :City="defaultCity"></WeatherComponent>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { City } from '../components/city/type/City'

import CityAutocomplete from '@/components/CityAutocomplete/CityAutocomplete.vue'
import WeatherComponent from '@/components/WeatherComponent/WeatherComponent.vue'

const defaultCity = ref<City|undefined>()
</script>
