import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('istoken'),
    cachePages: ['TabBar']
  },
  mutations: {
    settoken (state, data) {
      state.user = data
      // console.log(state.user)
      // window.localStorage.setItem('istoken', JSON.stringify(state.user))
      setItem('istoken', state.user)
    },
    // 添加缓存页面
    addCachePage (state, name) {
      if (!state.cachePages.includes(name)) {
        state.cachePages.push(name)
      }
    },

    // 移除缓存页面
    removeCachePage (state, name) {
      const index = state.cachePages.indexOf(name)
      if (index !== -1) {
        state.cachePages.splice(index)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
