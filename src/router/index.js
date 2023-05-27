import { createRouter, createWebHistory } from "vue-router";

//importar vistas
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'init',
        component: () => import('@/views/ViewHome.vue')
      }
    ]
  },
  {
    path: "/calculadora",
    name: "Calculadora",
    component: () => import('@/views/ViewCalculadora.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/ViewLogin.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
