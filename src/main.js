// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
import Pagination from 'vue-pagination-2'
import echarts from 'echarts'

// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 使用axios
Vue.prototype.axios = axios
// 使用qs
Vue.prototype.qs = qs

Vue.prototype.baseUrl = "http://localhost:8080"

Vue.component('pagination', Pagination)
// 引入echarts
Vue.prototype.$echarts = echarts

// 使用animate
Vue.use(animated)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
