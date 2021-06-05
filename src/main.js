import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.mount('#app')
