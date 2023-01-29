import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundPageView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/to/:name',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/to/Fulan',
      component: NotFoundPageView
    },
  ]
})

export default router
