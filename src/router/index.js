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
    hidden: true
  }]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

