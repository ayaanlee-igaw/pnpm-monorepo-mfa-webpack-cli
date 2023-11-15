import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from 'vue-router';
import HomeView from '../views/HomeView.vue';

// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
const remoteRouterModule = await import('designSystemComponents/router');
const remoteRouter: Router = remoteRouterModule.router;
window.console.log('RemoteRouter default', remoteRouterModule);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  ...remoteRouter.getRoutes(),
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
