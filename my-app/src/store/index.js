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
  actions: {
    increment ({commit}, payload) {
      // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，
      // 或者通过 context.state 和 context.getters 来获取 state 和 getters
      setTimeout(() => {
        // mutation 必须同步执行， action则不受约束
        commit('increment', payload)
      }, 100)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
