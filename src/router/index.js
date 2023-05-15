import { createRouter, createWebHistory } from "vue-router";

//importar vistas

import home from "../views/ViewHome.vue";

const routes = [
  {
    path: "/",
    name: "Alumno",
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;