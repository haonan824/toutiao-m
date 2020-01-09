import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('istoken')
  },
  mutations: {
    settoken (state, data) {
      state.user = data
      // console.log(state.user)
      // window.localStorage.setItem('istoken', JSON.stringify(state.user))
      setItem('istoken', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
