import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { registerPlugins } from '@/plugins/index.js'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
