<template>
  <v-card
    class="mx-auto"
    max-width="368"
  >
    <v-card-item :title="City.name">
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h3"
          cols="6"
        >
          {{ weather?.main.temp }}&deg;c
        </v-col>

        <v-col class="text-right" cols="6">
          <v-img :src="`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`"></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
        <v-list-item-subtitle>{{ weather?.wind.speed }} km/h</v-list-item-subtitle>
      </v-list-item>
    </div>
  </v-card>
</template>
<script setup lang="ts">

import { defineProps, onBeforeMount, PropType, ref } from 'vue'
import { City as CityType } from '../city/type/City'
import { useWeatherStore } from '@/components/WeatherComponent/stores/WeatherStore'
import { storeToRefs } from 'pinia'

const cityStore = useWeatherStore()
const { weather } = storeToRefs(cityStore)

const props = defineProps({
  City: {
    type: Object as PropType<CityType>,
    required: true
  }
})

onBeforeMount(() => {
  const { lat, lon } = props.City
  cityStore.fetchWeather(lat, lon)
})

</script>
