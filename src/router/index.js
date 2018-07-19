import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/book',
      name: 'book',
      children: [],
      component: () => import('@/components/page/book')
    },
    {
      path: '/study',
      name: 'study',
      children: [],
      component: () => import('@/components/page/study')
    },
    {
      path: '/chaoxin',
      name: 'chaoxin',
      children: [],
      component: () => import('@/components/page/chaoxin')
    },
    {
      path: '/business',
      name: 'business',
      children: [],
      component: () => import('@/components/page/business')
    },
    {
      path: '/school',
      name: 'school',
      children: [],
      component: () => import('@/components/page/school')
    },
    {
      path: '/tongxinyun',
      name: 'tongxinyun',
      children: [],
      component: () => import('@/components/page/tongxinyun')
    },
    {
      path: '/baidu',
      name: 'baidu',
      children: [],
      component: () => import('@/components/page/baidu')
    },
    {
      path: '/zhihu',
      name: 'zhihu',
      children: [],
      component: () => import('@/components/page/zhihu')
    },
    {
      path: '/weixin',
      name: 'weixin',
      children: [],
      component: () => import('@/components/page/weixin')
    }
  ]
})
