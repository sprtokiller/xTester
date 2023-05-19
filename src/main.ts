import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import { API } from '@/services/api'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const api = new API('http://localhost:7331/api/')

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
  })
app.provide('API', api)

app.mount('#app')
