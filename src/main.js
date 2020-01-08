import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuex from 'vuex'
import './utils/validation'
import './utils/register-vant' // vant模块
import 'amfe-flexible' // 动态设置 REM
import './styles/index.less'

// import 'normalize.css' // 样式初始化
Vue.config.productionTip = false
// Vue.use(vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
