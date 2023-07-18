import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";

//importar vistas
const routes = [
  {
    path: "/authCallBack",
    component: () => import('@/components/auth0/AuthComponent.vue')
  },
  {
    path: "/",
    redirect: {name: "Home"},
    component: () => import('@/layouts/HomeLayout.vue'),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import('@/views/ViewHome.vue')
      }
    ]
  },
  {
    path:"/apps",
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: "calculadora",
        name: "Calculadora",
        component: () => import('@/views/ViewCalculadora.vue'),
      },
      {
        path: "generator",
        component: () => import('@/views/GeneratorView.vue'),
        children: [
          {
            path:"filtros",
            name: "Filtros",
            component: () => import('@/components/Generador/DataFilters.vue'),
            beforeEnter: authGuard
          },
          {
            path: "result",
            name: "Resultados",
            component: () => import('@/components/Generador/ResultadoGenerador.vue'),
            beforeEnter: authGuard
          }
        ]
      },
      {
        path: "/moreInfo",
        name: '',
        component: () => import('@/views/ViewInfo.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});


export default router;
