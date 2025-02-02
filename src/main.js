import './input.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(ElementPlus, pinia).mount('#app')
