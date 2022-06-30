import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

const pinia = createPinia()
pinia.use(piniaPersist)

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
