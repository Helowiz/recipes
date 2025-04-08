// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import WeeklyMenuView from '../views/WeeklyMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weekly-menu',
      component: WeeklyMenuView
    },
  ]
})

export default router