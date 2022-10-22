import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../components/Index.vue'),
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import('../components/Price.vue'),
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
