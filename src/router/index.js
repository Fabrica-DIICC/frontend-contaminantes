import { createRouter, createWebHistory } from "vue-router";

//importar vistas
const routes = [
  {
    path: "/home",
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
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
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
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
