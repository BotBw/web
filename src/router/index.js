import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView'
import MatchmakingIndex from '@/views/Matchmaking/MatchmakingIndex'
import NotFoundView from '@/views/Exceptions/NotFoundView'
import HomeIndex from '@/views/Home/HomeIndex'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeIndex
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/matchmaking',
    name: 'Matchmaking',
    component: MatchmakingIndex
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/:catchAll(.*)',
    name: 'defalt',
    redirect: '/NotFound'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
