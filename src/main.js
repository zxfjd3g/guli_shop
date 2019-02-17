import Vue from 'vue'
import "swiper/dist/css/swiper.min.css"

import App from './App.vue'
import router from './router'
import store from './store'
import LoginHeader from './components/LoginHeader.vue'
import Nav from './components/Nav.vue'

Vue.component('Nav', Nav)
Vue.component('LoginHeader', LoginHeader)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})