import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../../pages/HomePage.vue";
import SettingsPage from "../../pages/SettingsPage.vue";

const routes = [
  { path: "/", component: HomePage },  // Now HomePage manages ConnectionStatus & FeatureCards
  { path: "/settings", component: SettingsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
