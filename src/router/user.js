import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'userhome'
    }
  },
  {
    path: '/userhome',
    name: 'userhome',
    component: () => import('@/views/user/userhome')
  },
  {
    path: '/usersetting',
    name: 'usersetting',
    component: () => import('@/views/user/usersetting')
  },
  {
    path: '/usermodify',
    name: 'usermodify',
    component: () => import('@/views/user/usermodify')
  }
]

const router = new VueRouter({
  base: '/user',
  routes
})

export default router
