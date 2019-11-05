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
    name: 'basic',
    path: '/basic',
    redirect: '',
    component: () => import("@/views/basic"),
    chunkName: 'views/basic',
    hidden: true,
    children: [
      {
        name: 'barChart',
        path: '/basic/barChart',
        redirect: '',
        component: () => import("@/views/basic/barChart"),
        chunkName: 'views/basic/barChart',
        hidden: true
      }
    ]
  },
  {
    name: 'specific',
    path: '/specific',
    redirect: '',
    component: () => import("@/views/specific"),
    chunkName: 'views/specific',
    hidden: true,
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

