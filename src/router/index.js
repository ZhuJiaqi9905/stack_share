import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Login from '@/components/Login'
import GeekPage from '@/components/GeekPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/geekpage',
      name: 'GeekPage',
      component: GeekPage
    }
  ]
})
