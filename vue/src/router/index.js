import { createRouter, createWebHistory } from 'vue-router'
import RouterNames from '../router/routerName.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../layouts/MainLoyout.vue"),
      children: [
            {
                path: '',
                name: RouterNames.main,
                component: () => import('../views/HomeView.vue')
            },
            {
                path: 'about',
                name: RouterNames.about,
                component: () => import('../views/AboutView.vue'),
            },
            {
                path: 'contact',
                name: RouterNames.contact,
                component : () => import('../views/ContactView.vue'),
            }
      ]
    },
  ],
})

export default router
