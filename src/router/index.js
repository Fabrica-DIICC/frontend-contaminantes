import { createRouter, createWebHistory } from "vue-router";

//importar vistas
const routes = [
  {
    path: "/",
    redirect: { path: "/home" },
    component: () => import('@/layouts/HomeLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/ViewHome.vue')
      }
    ]
  },
  {
    path: '/init ',
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
      },     
       {
        path: "/chart",
        name: "chart",
        component: () => import('@/views/ChartTest.vue'),
      },
      {
        path: "/generator",
        component: () => import('@/views/GeneratorView.vue'),
        children: [
          {
            path: "",
            name:'Filtros',
            component: () => import('@/components/Generador/DataFilters.vue')
          },
          {
            path: "result",
            name: "Resultados",
            component: () => import('@/components/Generador/ResultadoGenerador.vue')
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
