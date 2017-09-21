// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MyAwesomePlugin from 'my-awesome-plugin'
require('amcharts3/amcharts/amcharts.js')
require('amcharts3/amcharts/serial.js')
require('amcharts3/amcharts/plugins/responsive/responsive.js')

Vue.use(MyAwesomePlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
