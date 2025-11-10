import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from './views/CardDetails.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

import { useAuth } from './composables/useAuth'
import { query } from 'firebase/firestore'
const {isAuthenticated} = useAuth()

const routes = [
  { path: '/homework11/company-directory', name: 'Home', component: HomePage },
  { path: '/homework11/company-directory/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/homework11/company-directory/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/homework11/company-directory/Login', name: 'LoginPage', component: LoginPage },
  { path: '/homework11/company-directory/settings', name: 'SettingsPage', component: SettingsPage, meta: {reqiuresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.reqiuresAuth && !isAuthenticated.value) {
    next({ name: 'LoginPage', query: {redirect: to.fullPath}})
  }
  else {
    next()
  }
})

export default router
