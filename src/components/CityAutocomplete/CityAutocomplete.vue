<template>
  <div>
    <v-autocomplete
    v-model="model"
    label="Ciudad"
    :items="cities"
    item-title="name"
    @update:search="search"
    @change.capture="cityChanged"></v-autocomplete>
  </div>
</template>
<script setup lang="ts">

import { defineModel, watch, ref } from 'vue'
import { useCityStore } from '@/components/city/stores/CityStore'
import { City as CityType } from '../city/type/City'
import { debounce } from '@/composable/debounce'
import { storeToRefs } from 'pinia'

const cityStore = useCityStore()
const { fetchCities } = cityStore
const { cities } = storeToRefs(cityStore)

const search = (searchTerm:string) => {
  if (!searchTerm) return false

  debounce(() => {
    fetchCities(searchTerm)
  }, 800)()
}

const city = ref()
const model = defineModel<CityType>()

watch(model, (currentValue, oldValue) => {
  console.log('WatchAC', currentValue)
  console.log('WatchAC', oldValue)
})
</script>
