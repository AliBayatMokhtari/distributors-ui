import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuetify, type VuetifyOptions } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import theme from './plugins/vuetify/theme'

const app = createApp(App)

const vuetify = createVuetify({
  locale: {
    locale: 'fa',
    fallback: 'fa',
    rtl: { fa: true },
  },
  theme,
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
