import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/appHome.vue";
import CreateIssue from "../views/createIssue.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/appLogin.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/appRegister.vue")
  },
  {
    path : "/create_issue",
    name : "create_issue",
    component: CreateIssue
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;