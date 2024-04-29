import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'mainPage',
    component: () => import('./main/MainPage.vue')
  },
  {
    path: '/auth',
    name: 'authPage',
    component: () => import('./auth/AuthPage.vue')
  },
  {
    path: '/registration',
    name: 'registrationPage',
    component: () => import('./registration/registrationPage.vue')
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('./login/LoginPage.vue'),
  },
  {
    path: '/home',
    name: 'homePage',
    component: () => import('./home/HomePage.vue'),
    meta: {
      layout: 'MainLayout'
    }
  },
]
