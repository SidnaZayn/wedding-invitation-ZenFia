import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QRScannerCamera from '../views/QRScannerCamera.vue'
import NotFoundPageView from '../views/NotFoundView.vue'
import Dashboard from "../views/Dashboard.vue";
import DashboardJumlahTamu from "../views/DashboardJumlahTamu.vue";
import Login from "../views/Login.vue";
import BuatAyang from "../views/buatAyang.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/buat-ayang',
      name: 'BuatAyang',
      component: BuatAyang
    },
    {
      path: '/to/:id',
      name: 'home',
      component: HomeView
    },
    {
      path: '/to/scanqr',
      name: 'QRScanner',
      component: QRScannerCamera,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/to/Fulan',
      component: NotFoundPageView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/dashboard-jumlah-tamu',
      name: 'DashboardJumlahTamu',
      component: DashboardJumlahTamu,
      meta: {
        isAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(store.getters.isAuthenticated)
  if (to.matched.some((record) => record.meta.isAuth)) {
    if (localStorage.getItem('login')) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
export default router