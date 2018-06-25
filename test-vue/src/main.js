// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import store from './vuex/store'
// import './api/axios'
import {LoadingPlugin, BusPlugin, AjaxPlugin, ToastPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(BusPlugin)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  components: { App },
  template: '<App/>'
})
