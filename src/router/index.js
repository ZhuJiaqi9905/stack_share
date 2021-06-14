import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import UserPage from '@/components/user/UserPage'
import PostDemand from '@/components/user/PostDemand'
import PostSuccess from '@/components/user/PostSuccess'
import Signup from '@/components/Signup'
import GeekPage from "@/components/geek/GeekPage"
import PostSkill from "@/components/geek/PostSkill"
import DetailTask from "@/components/geek/DetailTask";
import DetailDemand from '@/components/user/DetailDemand';
import DataService from '@/components/user/DataService';
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
      path: '/user/post-success',
      name: 'PostSuccess',
      component: PostSuccess
    },
    {
      path: '/user/detail-demand',
      name: 'DetailDemand',
      component: DetailDemand
    },
    {
      path: '/user/data-service',
      name: 'DataService',
      component: DataService
    },
    {
      path: '/geek/geek-page',
      name: 'GeekPage',
      component: GeekPage
    },
    {
      path: '/geek/post-skill',
      name: 'PostSkill',
      component: PostSkill
    },
    {
      path: '/geek/detail-task',
      name: 'DetailTask',
      component: DetailTask
    }
  ]
})
