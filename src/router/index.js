import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QRScannerCamera from '../views/QRScannerCamera.vue'
import NotFoundPageView from '../views/NotFoundView.vue'
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/to/:name',
      name: 'home',
      component: HomeView
    },
    {
      path: '/to/scanqr',
      name: 'QRScanner',
      component: QRScannerCamera
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