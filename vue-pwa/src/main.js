import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueOffline from 'vue-offline'


createApp(App).mount('#app').use(VueOffline)