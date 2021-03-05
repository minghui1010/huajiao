// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
// 引入vant的组件
import Vant from './vants/index'
import 'vant/lib/index.css'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vant)
// Vue.use(axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
