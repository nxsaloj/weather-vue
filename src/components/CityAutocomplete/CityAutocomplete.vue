<template>
  <div>
    <v-autocomplete
    v-model="model"
    label="Ciudad"
    :items="cities"
    item-title="name"
    return-object
    @update:search="search"></v-autocomplete>
  </div>
</template>
<script setup lang="ts">

import { defineModel, watch, ref } from 'vue'
import { useCityStore } from '@/components/city/stores/CityStore'
import { City as CityType } from '../city/type/City'
import { debounce } from '@/composable/debounce'
import { storeToRefs } from 'pinia'

const cityStore = useCityStore()
const { cities } = storeToRefs(cityStore)

const search = (searchTerm:string) => {
  if (!searchTerm) return false

  cityStore.fetchCities(searchTerm)
}

const model = defineModel<CityType>()
</script>
