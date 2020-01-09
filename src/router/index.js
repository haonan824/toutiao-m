import Vue from 'vue'
import VueRouter from 'vue-router' // 引入路由
import login from '../views/login/index.vue' // 引入登录页面
Vue.use(VueRouter)
const routes = [{ path: '/', redirect: '/login' },
  { path: '/login', component: login }]
const router = new VueRouter({
  routes
})

export default router
