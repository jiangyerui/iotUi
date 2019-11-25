// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
import Pagination from 'vue-pagination-2'
import echarts from 'echarts'
// import laydate from 'laydate'
// import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// 引入axios
import axios from 'axios'
import {postRequest} from './api/ajaxPost'

// 引入qs
// import qs from 'qs'
// 使用axios
Vue.prototype.axios = axios
// Vue.use(ViewUI);
Vue.prototype.postRequest = postRequest;

// Vue.prototype.laydate = laydate
// 使用qs
// Vue.prototype.qs = qs

Vue.prototype.base = "http://localhost:8080"

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

// 格式化时间
Vue.filter('dateFormat', function (dateStr, pattern) {
  var dt = new Date(dateStr)
  var y = dt.getFullYear()
  var m = dt.getMonth() + 1
  var d = dt.getDate()
  // return y + '-' + m + '-' + d
  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    // return '$(y)-$(m)-$(d)'
    return y + '-' + m + '-' + d
  } else {
    var hh = dt.getHours()
    var mm = dt.getMinutes()
    var ss = dt.getSeconds()
    if (hh < 10) {
      hh = '0' + hh
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    if (ss < 10) {
      ss = '0' + ss
    }
    // return '$(y)-$(m)-$(d) $(hh):$(mm):$(ss)'
    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
  }
})
