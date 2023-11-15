import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import DesignSystemComponentsView from '../views/DesignSystemComponentsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/design-system-components',
    name: 'design-system-components',
    component: DesignSystemComponentsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
