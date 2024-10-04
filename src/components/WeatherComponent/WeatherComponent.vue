<template>
  <v-card
    class="mx-auto"
    max-width="368"
  >
    <v-card-item :title="City.name">
      <template v-slot:subtitle>
        <v-icon
          class="me-1 pb-1"
          color="error"
          icon="mdi-alert"
          size="18"
        ></v-icon>

        Extreme Weather Alert {{ City.name }}
      </template>
    </v-card-item>
  </v-card>
</template>
<script setup lang="ts">

import { defineProps, onBeforeMount, PropType, ref } from 'vue'
import { City as CityType } from '../city/type/City'
import { storeToRefs } from 'pinia'

const props = defineProps({
  City: {
    type: Object as PropType<CityType>,
    required: true
  }
})
onBeforeMount(() => {
  console.log('pros', props.City)
})

</script>
