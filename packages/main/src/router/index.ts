import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from 'vue-router';
import HomeView from '../views/HomeView.vue';

// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
const designSystemComponentsModule = await import('designSystemComponents/router');
const designSystemComponentsRouter: Router = designSystemComponentsModule.default;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  ...designSystemComponentsRouter.getRoutes(),
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
