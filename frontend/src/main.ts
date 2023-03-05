import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import store from './store/store.js'

import './assets/css/main.css'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
