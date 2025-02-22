import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue"; // Load App.vue directly

const routes = [
  { path: "/", component: App },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

