import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main.vue')
  },
];

const router = createRouter({
  routes,
  history:createWebHistory()
});

export default router;