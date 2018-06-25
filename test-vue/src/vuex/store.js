import Vue from 'vue'
import Vuex from 'vuex'
import loginState from './loginState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginState
  }
})
