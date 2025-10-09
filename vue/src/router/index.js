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
                path: 'main',
                name: RouterNames.main,
                component: () => import('../views/HomeView.vue')
            },
            {
                path: 'about',
                name: RouterNames.about,
                component: () => import('../views/AboutView.vue'),
                meta: {
                  Info: 'Информация о нас',
                  hideInfoAbout: true,
                  
                }
            },
            {
                path: 'contact',
                name: RouterNames.contact,
                component : () => import('../views/ContactView.vue'),
                meta: {
                    headerTitle: 'Контакты',
                    hidePhone: true,
                    customClass: 'contact-header'
                  }
            }
      ]
    },
  ],
})

export default router
