import { createRouter, createWebHistory } from "vue-router";

//importar vistas
import home from "../views/ViewHome.vue";
import login from "../views/ViewLogin.vue";
import calculadora from "../views/ViewCalculadora.vue";

const routes = [
  {
    path: "/",
    name: "Alumno",
    component: home,
  },
  {
    path: "/calculadora",
    name: "Calculadora",
    component: calculadora,
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
