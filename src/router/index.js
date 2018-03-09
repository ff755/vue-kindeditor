import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import World from '@/pages/World'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      name: 'World',
      component: World
    }
  ]
})
