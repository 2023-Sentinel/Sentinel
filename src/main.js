import {createApp} from 'vue'
import store from "@/scripts/store"
import router from "@/scripts/router"
import App from './App.vue'
import axios from 'axios'

import '@/assets/SelectStyle.css'

const app=createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081'
app.use(router).use(store).mount('#app')

//createApp(App).use(store).use(router).mount('#app')
