import {createApp} from 'vue'
import store from "@/scripts/store"
import router from "@/scripts/router"
import App from './App.vue'
import axios from 'axios'

import { BaklavaVuePlugin } from "@baklavajs/plugin-renderer-vue3";
// import "@baklavajs/plugin-renderer-vue3/dist/styles.css";
import "/src/assets/nstyle.scss";

const app=createApp(App)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081'
app.use(router).use(store).use(BaklavaVuePlugin).mount('#app')
