import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Register from './components/Register'
import AllGalleries from './pages/AllGalleries'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', redirect: '/all-galleries' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/all-galleries', component: AllGalleries, name: 'all-galleries' },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
