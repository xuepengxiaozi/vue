
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
//引入使用的reset.css
import "./assets/css/reset.css"
Vue.config.productionTip = false
//引入 rem.js
import rem from "./assets/js/rem"
//引入swiper vue-awesome-swiper
import VueAweSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
Vue.use(VueAweSwiper)
import fastClick from "fastclick"
fastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
