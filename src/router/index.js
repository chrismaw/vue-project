import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodbyeWorld from '@/components/GoodbyeWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodbye',
      name: 'GoodbyeWorld',
      component: GoodbyeWorld
    }
  ]
})
