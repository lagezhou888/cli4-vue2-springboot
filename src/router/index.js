import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../demo/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    redirect: '/userhome',
    children: [
      {
        path: '/userhome',
        name: 'userhome',
        component: () => import('@/views/userhome')
      },
      {
        path: '/usersetting',
        name: 'usersetting',
        component: () => import('@/views/usersetting')
      },
      {
        path: '/business',
        name: 'business',
        component: () => import('@/views/business')
      }
    ]
  },
  {
    path: '/usermodify',
    name: 'usermodify',
    component: () => import('@/views/usersetting/usermodify')
  },
  {
    path: '/userasset',
    name: 'userasset',
    component: () => import('@/views/usersetting/userasset')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('@/views/usersetting/userinfo')
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
]

const router = new VueRouter({
  routes
})

export default router
