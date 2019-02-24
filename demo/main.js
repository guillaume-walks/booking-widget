import Vue from 'vue'
import App from './App.vue'

import BookingWidget from '../src'
Vue.use(BookingWidget)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
