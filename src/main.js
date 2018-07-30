// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入工具文件
import utils from './utils/index.js'
//引入API文件
import api from './api/index.js'
//将工具方法绑定到全局
Vue.prototype.$utils=utils
Vue.config.productionTip = false
//将API方法绑定到全局
Vue.prototype.$api=api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
