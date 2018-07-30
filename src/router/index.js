import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import UEI from '@/page/ueTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
     path:'/ueTest' ,
      component:UEI
    }
  ]
})
