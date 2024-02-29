import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../src/home/index.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../src/profile/index.vue'),
    },
  ],
})

export default router
