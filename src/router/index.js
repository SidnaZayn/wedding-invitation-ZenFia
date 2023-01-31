import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundPageView from '../views/NotFoundView.vue'
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const routes = [
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
  {
    path:"/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta:{
      isAuth: true
    }
  },
  {
    path:"/login",
    name: "Login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

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
