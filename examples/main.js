import Vue from 'vue'
import App from './App.vue'

import VwUI from './../package/index.js'

Vue.use(VwUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
