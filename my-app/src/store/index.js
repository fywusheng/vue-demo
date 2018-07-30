import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    city: '北京',
    todos: [
      { id: 1, text: '德玛西亚', done: true },
      { id: 2, text: '艾欧尼亚', done: false }
    ]
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.count
    },
    reduce (state) {
      state.count--
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
