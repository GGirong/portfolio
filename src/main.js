import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/1.0.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')
