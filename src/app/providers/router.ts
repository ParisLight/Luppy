import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages/index.ts'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
