import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/appHome.vue";
import CreateIssue from "../views/createIssue.vue";
import Resolved from "../components/DisplayResolvedIssues.vue";

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
  },
  {
    path : "/Issue",
    name : "display_issue",
    component : () => import("../views/displayIssue.vue")
  },
  {
    path : "/edit-issue",
    name : "edit-issue",
    component : () => import("../views/editIssue.vue")
  },
  {
    path :  "/resolved-issues",
    name : "resolved-issues",
    component : Resolved
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