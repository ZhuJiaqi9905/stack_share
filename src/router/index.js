import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import UserPage from '@/components/user/UserPage'
import PostDemand from '@/components/user/PostDemand'
import Signup from '@/components/Signup'
import DetailDemand from '@/components/user/DetailDemand';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/user/user-page',
      name: 'UserPage',
      component: UserPage
    },
    {
      path: '/user/post-demand',
      name: 'PostDemand',
      component: PostDemand
    },
    {
      path: '/user/detail-demand',
      name: 'DetailDemand',
      component: DetailDemand
    }
  ]
})
