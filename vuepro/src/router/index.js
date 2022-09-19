import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/posend",
      name: "posend",
      component: () => import("../views/PosendView.vue"),
    },
    {
      path: "/posecls",
      name: "posecls",
      component: () => import("../views/PoseclsView.vue"),
    },
  ],
});

export default router;
