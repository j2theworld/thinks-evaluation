
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/pages/Login'
import Dashboard from '@/views/pages/Dashboard'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

