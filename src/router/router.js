import CategoryView from '@/views/CategoryView.vue';
import MainPage from '@/views/MainPage.vue';
import ProductsList from '@/components/ProductsList.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/category/:slug',
    name: 'category',
    component: CategoryView,
    children: [
      {
        name: 'subSlug',
        path: ':subSlug?',
        component: ProductsList,
        props: true,
      },
    ],
    props: true,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
