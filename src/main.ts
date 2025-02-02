import './main.css' //из тайлвинд
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
