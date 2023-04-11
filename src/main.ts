import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/main.css'

createApp(App)
    .use(router)
    .use(vue3GoogleLogin, {
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
    })
    .mount('#app')