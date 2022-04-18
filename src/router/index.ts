import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/home.vue';
import Layout from '../layout/index.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;