import Vue from 'vue'
import VueRouter from 'vue-router'

import Feed from '../views/Feed'
import Profile from '../views/Profile'
import RegisterLogIn from '../views/RegisterLogIn'

Vue.use(VueRouter)

const routes = [{
    path: '/account',
    name: 'Account',
    component: RegisterLogIn
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
]

const router = new VueRouter({
    routes
  })
  
  export default router