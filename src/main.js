import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/validation'// 引入校验规则
import './utils/register-vant' // vant模块
import 'amfe-flexible' // 动态设置 REM
import './styles/index.less'// 引入样式
import './utils/datetime'// 时间格式

// import 'normalize.css' // 样式初始化
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
