import { createWebHistory, createRouter } from 'vue-router';

import InfoPage from '../views/InfoPage.vue';
import HelloPage from '../views/HelloPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: () => import('../views/MainPage.vue'),
  },
  {
    path: '/info',
    component: InfoPage,
  },
  {
    path: '/vue',
    component: HelloPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
