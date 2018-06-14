import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Services from '@/components/Services'
// import GoodbyeWorld from '@/components/GoodbyeWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})
