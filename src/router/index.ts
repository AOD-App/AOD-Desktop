import { createRouter, createWebHistory } from "vue-router";
import App from '../App.vue'; // Load App.vue directly

const routes = [
  { path: "/", component: App },
  {
    path: '/settings',
    component: () => import('../../pages/SettingsPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
