import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '*',
    redirect: '/',
    hidden: true
  },
  {
    name: '404',
    path: '/404',
    redirect: '',
    component: () => import("@/views/404.vue"),
    hidden: true
  },
  {
    name: 'index',
    path: '/',
    redirect: '',
    component: () => import("@/views/index.vue"),
    chunkName: 'views/index',
    hidden: true,
  },
  {
    name: 'barChart1',
    path: '/basic/barChart1',
    redirect: '',
    component: () => import("@/views/basic/barChart1"),
    chunkName: 'views/basic/barChart1',
    hidden: true
  },
  {
    name: 'barChart2',
    path: '/basic/barChart2',
    redirect: '',
    component: () => import("@/views/basic/barChart2"),
    chunkName: 'views/basic/barChart2',
    hidden: true
  },
  {
    name: 'barChart3',
    path: '/basic/barChart3',
    redirect: '',
    component: () => import("@/views/basic/barChart3"),
    chunkName: 'views/basic/barChart3',
    hidden: true
  },
  {
    name: 'threeCircles',
    path: '/basic/threeCircles',
    redirect: '',
    component: () => import("@/views/basic/threeCircles"),
    chunkName: 'views/basic/threeCircles',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

