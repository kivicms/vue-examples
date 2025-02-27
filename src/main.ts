import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app')
