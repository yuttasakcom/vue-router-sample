import Vue from "vue";
import VueRouter from "vue-router";

import store from "../stores";

import Home from "@/pages/Home";
import User from "@/pages/User";
import Login from "@/pages/Login";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/user",
      component: User,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(field => field.meta.requireAuth)) {
    if (!store.getters.isAuth) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;