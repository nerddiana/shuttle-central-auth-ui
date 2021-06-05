import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import 'virtual:windi.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isLoggedIn = () => {
  return store.getters['session/getSession']
}

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    router.push('/account')
  }
})

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.mount('#app')
