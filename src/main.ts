import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives
})

createApp(App)
  .use(vuetify)
  .use(store)
  .use(pinia)
  .use(router).mount('#app')
