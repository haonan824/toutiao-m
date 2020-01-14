import Vue from 'vue'
import VueRouter from 'vue-router' // 引入路由
Vue.use(VueRouter)
const routes = [
  { path: '/',
    component: () => import('../views/tabbar'),
    children: [
      { path: '', name: 'home', component: () => import('../views/home') },
      { path: '/qa', name: 'qa', component: () => import('../views/qa') },
      { path: '/video', name: 'video', component: () => import('../views/video') },
      { path: '/my', name: 'my', component: () => import('../views/my') }
    ]
  },
  { path: '/login', component: () => import('../views/login') },
  { path: '/user/:userId', component: () => import('../views/user') },
  { path: '/search', component: () => import('../views/search') },
  { path: '/article/:articleId', component: () => import('../views/article'), props: true }
]
const router = new VueRouter({
  routes
})

export default router
