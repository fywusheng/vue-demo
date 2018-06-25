// /*登陆信息保存*/
import util from '../common/util'

const state = {
  loginState: false,
  userInfo: ''
}

let getters = {
  isLogin (state) {
    // console.log(state);
    if (util.getCookie('kxqcisLogin') === 1) { // 如果状态是1是登陆状态
      return true
    }
    return false
  },
  userInfo (state) {
    return state.userInfo || window.localStorage.getItem('kxqcuser')
  }
  // isLogin: state => state.loginState,
}

let actions = {// 组件调用方法
  UPDATE_LOGIN: ({commit}, changeState) => { //  s
    commit('UPDATE_LOGIN', changeState)
  },
  UPDATE_USER: ({commit}, userInfo) => { //  s
    commit('UPDATE_USER', userInfo)
  }
}

// mutations
const mutations = {
  UPDATE_LOGIN (state, loginState) { // 修改登陆状态
    const setState = loginState === true ? '1' : '0'
    if (loginState) {
      util.setCookie('kxqcisLogin', 1)
    } else {
      util.delCookie('kxqcisLogin')
    }
    state.loginState = setState
  },
  UPDATE_USER (state, userInfo) { // 更新登陆用户信息
    const save = userInfo.length ? true : ''
    if (save) {
      state.userInfo = userInfo
      window.localStorage.setItem('kxqcuser', userInfo)
    } else {
      state.userInfo = ''
      window.localStorage.removeItem('kxqcuser')
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
